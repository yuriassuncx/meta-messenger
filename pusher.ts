import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
    appId: "1527160",
    key: "c88db06c9dc045f12527",
    secret: "24e8bd4a4c2dfe7f8396",
    cluster: "sa1",
    useTLS: true,
});

export const clientPusher = new ClientPusher('c88db06c9dc045f12527', {
    cluster: 'sa1',
    forceTLS: true,
});