import {AbstractPublisher, Subjects, TicketUpdatedEvent} from "@tktbitch/common";


export class TicketUpatedPublisher extends AbstractPublisher<TicketUpdatedEvent>{
    readonly subject = Subjects.TicketUpdated;
}
