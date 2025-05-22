import Navbar from './components/Navbar';
import ProfileSection from './components/ProfileSection';
import StudiesSection from './components/StudiesSection';
import HobbiesSection from './components/HobbiesSection';
import SocialSection from './components/SocialSection';

function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <main>
        <ProfileSection />
        <StudiesSection />
        <HobbiesSection />
        <SocialSection />
      </main>
    </div>
  );
}

export default App;
