import React, { useState } from 'react';

// Kullanıcı verisi için interface tanımlama
interface UserData {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

// Props interface tanımlama
interface UserProfileProps {
  initialUser: UserData;
  onUpdateUser: (user: UserData) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({
  initialUser,
  onUpdateUser,
}) => {
  const [user, setUser] = useState<UserData>(initialUser);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUser = { ...user, name: event.target.value };
    setUser(newUser);
    onUpdateUser(newUser);
  };

  const toggleActiveStatus = (): void => {
    const newUser = { ...user, isActive: !user.isActive };
    setUser(newUser);
    onUpdateUser(newUser);
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Kullanıcı Profili</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            İsim:
          </label>
          <input
            type="text"
            value={user.name}
            onChange={handleNameChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <p className="mt-1">{user.email}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Yaş:
          </label>
          <p className="mt-1">{user.age}</p>
        </div>
        <div>
          <button
            onClick={toggleActiveStatus}
            className={`px-4 py-2 rounded-md ${
              user.isActive ? 'bg-green-500' : 'bg-red-500'
            } text-white`}
          >
            {user.isActive ? 'Aktif' : 'Pasif'}
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
