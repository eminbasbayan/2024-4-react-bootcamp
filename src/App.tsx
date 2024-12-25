import UserProfile from './components/UserProfile';

const App = () => {
  const initialUser = {
    id: 1,
    name: 'Ahmet Yılmaz',
    email: 'ahmet@example.com',
    age: 30,
    isActive: true,
  };

  const handleUpdateUser = (updatedUser: {
    id: number;
    name: string;
    email: string;
    age: number;
    isActive: boolean;
  }) => {
    console.log('Kullanıcı güncellendi:', updatedUser);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <UserProfile
          initialUser={initialUser}
          onUpdateUser={handleUpdateUser}
        />
      </div>
    </div>
  );
};

export default App;
