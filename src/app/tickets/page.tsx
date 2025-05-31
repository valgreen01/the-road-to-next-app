import Link from 'next/link';
import { initialTickets } from '@/data';
import { ticketPath } from '@/paths';

const TICKETS_ICONS = {
	OPEN: '🟢',
	DONE: '✅',
	IN_PROGRESS: '🔵',
}

const TicketsPage = () => {
	return (
		<div>
			{initialTickets.map((ticket) => (
				<div key={ticket.id} className="mb-6">
					<div>{TICKETS_ICONS[ticket.status]}</div>
					<h2 className="text-lg">{ticket.title}</h2>
					<Link href={ticketPath(ticket.id)} className="text-sm underline">View</Link>
				</div>
			))}
		</div>
	);
};

export default TicketsPage;
