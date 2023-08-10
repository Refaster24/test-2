import { useState } from 'react';

interface InstagramUser {
  id: string;
  username: string;
  full_name: string;
  profile_picture: string;
}
// "react-facebook-login": "^4.1.1"
const App: React.FC = () => {
  const [user, setUser] = useState<InstagramUser | null>(null);

  // const handleInstagramLogin = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://api.instagram.com/oauth/authorize?client_id=1291562164795787&redirect_uri=https://fanciful-daffodil-e37030.netlify.app/&scope=user_profile,user_media&response_type=code`
  //     );

  //     if (response.ok) {
  //       const { code } = await response.json();
  //       // Use the obtained code to exchange for an access token
  //       const tokenResponse = await fetch(
  //         `https://api.instagram.com/oauth/access_token`,
  //         {
  //           method: 'POST',
  //           body: JSON.stringify({
  //             client_id: '314787974343052',
  //             client_secret: 'ff8acfe4bc105cdfa7faff1ab5790ebc',
  //             grant_type: 'authorization_code',
  //             redirect_uri: 'https://fanciful-daffodil-e37030.netlify.app/auth',
  //             code: code,
  //           }),
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //         }
  //       );

  //       if (tokenResponse.ok) {
  //         const data = await tokenResponse.json();
  //         // Now you have the access token to make API requests
  //         setUser(data.user);
  //       } else {
  //         console.error('Error exchanging code for access token');
  //       }
  //     } else {
  //       console.error('Error starting Instagram login');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <div className="App">
      <h1>Connect with Instagram</h1>
      {user ? (
        <div>
          <img src={user.profile_picture} alt={user.username} />
          <p>Username: {user.username}</p>
          <p>Full Name: {user.full_name}</p>
        </div>
      ) : (
        <button>Login with Instagram</button>
      )}
    </div>
  );
};

export default App;
