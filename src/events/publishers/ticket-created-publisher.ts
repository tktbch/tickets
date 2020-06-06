import {AbstractPublisher, Subjects, TicketCreatedEvent} from "@tktbitch/common";


export class TicketCreatedPublisher extends AbstractPublisher<TicketCreatedEvent>{
    readonly subject = Subjects.TicketCreated;
}
