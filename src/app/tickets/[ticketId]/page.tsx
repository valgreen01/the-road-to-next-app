import Link from 'next/link';
import { initialTickets } from '@/data';
import { ticketsPath } from '@/paths';

type TicketPageProps = {
	params: Promise<{
		ticketId: string;
	}>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
	const { ticketId } = await params;
	const ticket = initialTickets.find(
		(ticket) => ticket.id === Number(ticketId)
	);

	if (!ticket) {
		return <p>Ticket not found</p>;
	}

	return (
		<div>
			<div className="mb-6">
				<h2 className="text-lg">{ticket?.title}</h2>
				<p className="text-sm">{ticket?.description}</p>
				<p className="text-sm">Status: {ticket?.status}</p>
			</div>
			<Link href={ticketsPath()} className="text-sm underline mt-6">
				Back to Tickets
			</Link>
		</div>
	);
};

export default TicketPage;
