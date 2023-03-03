import {
  MailIcon,
  PhoneIcon,
} from '@heroicons/react/solid';

const people = [
  {
    email: 'collega-a@bedrijf.nl',
    name: 'Silvia van Buren',
    title: 'Front Office',
    imageUrl: 'https://randomuser.me/api/portraits/women/75.jpg',
    telephone: '+31600000000',
  },
  {
    email: 'hans@bedrijf.nl',
    name: 'Hans van Willigen',
    title: 'Lead Developer',
    imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
    telephone: null,
  },
  {
    email: 'loesvdlinde@hotmail.com',
    name: 'Loes van der Linde',
    title: 'UX Engineer',
    imageUrl: 'https://scontent-ams4-1.xx.fbcdn.net/v/t1.6435-9/203004664_2334745963336973_30807586988129401_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=M4wwYpe1YjoAX-Z3Fob&_nc_ht=scontent-ams4-1.xx&oh=00_AfDSuJKZnJlzydPiPzbq-GikNnqKG8cfurkpmDawGZHKGQ&oe=6429AF24',
    telephone: '0648871771',
  },
];

// Sort people array by last name
people.sort((a, b) => {
  const lastNameA = a.name.split(' ').pop().toLowerCase();
  const lastNameB = b.name.split(' ').pop().toLowerCase();
  if (lastNameA < lastNameB) {
    return -1;
  } else if (lastNameA > lastNameB) {
    return 1;
  }
  return 0;
});

export default function Contacts() {
  return (
    <ul role="list" className="grid m-4 grid-cols-1 space-y-4">
      {people.map((person) => (
        <li key={person.email} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">{person.name}</h3>
                <span
                  className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      {person.role}
                    </span>
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate">{person.title}</p>
            </div>
            <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0 object-cover" src={person.imageUrl} alt="" />
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Email</span>
                </a>
              </div>

              {person.telephone !== null &&
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href={`tel:${person.telephone}`}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                  >
                    <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Call</span>
                  </a>
                </div>
              }

            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
