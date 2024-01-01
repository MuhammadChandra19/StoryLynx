import { Webhook, WebhookRequiredHeaders } from "svix";
import { headers } from "next/headers";

import { IncomingHttpHeaders } from "http";

import { NextResponse } from "next/server";
import repository from "@/lib/repository";

type EventType = "user.created" | "user.deleted" | "user.updated";

type Event = {
  data: Record<string, string | number | Record<string, string>[]>;
  object: "event";
  type: EventType;
};

export const POST = async (request: Request) => {
  const payload = await request.json();
  const header = headers();

  const heads = {
    "svix-id": header.get("svix-id"),
    "svix-timestamp": header.get("svix-timestamp"),
    "svix-signature": header.get("svix-signature"),
  };

  const wh = new Webhook(process.env.NEXT_CLERK_WEBHOOK_SECRET || "");

  let evnt: Event | null = null;

  try {
    evnt = wh.verify(
      JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders,
    ) as Event;
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 400 });
  }

  const eventType: EventType = evnt?.type!;

  if (eventType === "user.created" || eventType === "user.updated") {
    const { image_url, email_addresses, username, first_name, last_name, id } =
      evnt?.data ?? {};

    const userEmail = (email_addresses as Record<string, string>[])[0][
      "email_address"
    ];

    try {
      const { user } = repository;

      await user.createOrUpdate(
        {
          name: [first_name, last_name].join(" "),
          email: userEmail,
          about: "",
          username: username as string,
          image: image_url as string,
        },
        id as string,
      );
    } catch (err) {
      console.log(err);
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 },
      );
    }
  }
};
