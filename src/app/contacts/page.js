"use client";
import LogoutButton from '../components/LogoutButton';
import { useRouter } from 'next/navigation';
import { withAuth } from '../utills/withAuth';
import { useEffect, useState } from 'react';





const Contact = () => {
	const router = useRouter();
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		// Fetch the contacts from the server
		const fetchContacts = async () => {
			try {
				const res = await fetch('http://localhost:3001/api/contacts');
				const data = await res.json();
				setContacts(data.contacts);
			} catch (error) {
				console.log(error);
			}
		};

		fetchContacts();
	}, []);

	const handleEditContact = (contactId) => {
		// Redirect to the edit contact page
		router.push(`/contacts/edit/${contactId}`);
	};

	const handleDeleteContact = async (contactId) => {
		try {
			const res = await fetch(`http://localhost:3001/api/contacts/delete/contact/${contactId}`, {
				method: 'DELETE',
			});

			if (res.ok) {
				setContacts(prevContacts => prevContacts.filter(contact => contact._id !== contactId));
			} else {
				console.log('Failed to delete contact');
			}
		} catch (error) {
			console.log(error);
		}
	};

	// Button click handler
	const handleAddNewContact = () => {
		router.push('/contacts/new');
	};

	return (
		<div className="h-screen bg-gray-50 flex flex-col md:flex-row bg-[url('/images/bg-pattern.svg')]">
			<div className="w-full flex items-center relative bg-cover bg-[url('/images/ellipse2.svg')]">
				<div className="mx-auto">
					<div className="mt-[0rem] mb-[12rem]">
						<img src="/images/twc-logo-white.svg" alt="Logo" width={155} height={90} />
						<img src="/images/contacts-portal-white.svg" alt="Contacts Portal" width={255} height={90} />
					</div>
					<p className="text-white font-bold font-Futura text-7xl leading-12 mt-10 mb-5">Contacts</p>

					<div className="mt-10">
						<table className="w-full bg-white rounded-lg relative">
							<thead>
								<tr className="bg-gray-200 text-gray-700">
									<th className="py-4 px-6">Profile</th>
									<th className="py-4 px-6">Full Name</th>
									<th className="py-4 px-6">Gender</th>
									<th className="py-4 px-6">Email</th>
									<th className="py-4 px-6">Phone Number</th>
								</tr>
							</thead>
							<tbody>
								{contacts.map(contact => (
									<tr key={contact._id} className="border-b border-gray-200">
										<td className="py-4 px-6">
											<img
												src={contact.gender === 'male' ? '/images/male-profile-pic.png' : '/images/female-profile-pic.png'}
												alt="Profile"
												className="h-10 w-10 rounded-full"
											/>
										</td>
										<td className="py-4 px-6 text-custom-color text-lg">{contact.fullName}</td>
										<td className="py-4 px-6 text-custom-color text-lg">{contact.gender}</td>
										<td className="py-4 px-6 text-custom-color text-lg">{contact.email}</td>
										<td className="py-4 px-6 text-custom-color text-lg">{contact.phone}</td>
										<td className="py-4 px-6">
											<button
												type="button"
												className="text-blue-500 hover:text-blue-700"
												onClick={() => handleEditContact(contact._id)}
											>
												edit
											</button>
										</td>
										<td className="py-4 px-6">
											<button
												type="button"
												className="text-red-500 hover:text-red-700"
												onClick={() => handleDeleteContact(contact._id)}
											>
												delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>

						<button
							type="button"
							className="absolute top-0 right-0 mt-[38rem] mr-[30rem] bg-transparent rounded-full text-white py-3 text-3xl px-14 hover:scale-105 duration-300 border border-white"
							onClick={handleAddNewContact}
						>
							Add New Contact
						</button>
					</div>


					<LogoutButton />
				</div>
			</div>
		</div>
	);





};

export default withAuth(Contact);