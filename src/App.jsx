import { useState } from 'react';
import './App.css';
import Mark from'./assets/avatar-mark-webber.webp';
import Anna from'./assets/avatar-anna-kim.webp';
import Angela from'./assets/avatar-angela-gray.webp';
import jacob from'./assets/avatar-jacob-thompson.webp';
import kimberly from'./assets/avatar-kimberly-smith.webp';
import nathan from'./assets/avatar-nathan-peterson.webp';
import Rizky from'./assets/avatar-rizky-hasanuddin.webp';
// import NotificationList from './Components/NotificationList';

const notificationsData = [
  {img:<img src={Mark}/>,  id: 1, text: 'Mark Webber reacted to your recent post', read: false , type:'reacted to your recent post "My first tournament today!"', time:'1m ago'},
  {img:<img src={Angela}/>, id: 2, text: 'Angela Gray followed you', read: false, type:'followed you',time:'5m ago'},
  {img:<img src={jacob}/>,  id: 3, text: 'Jacob Thompson has joined your group', read: false,type:'has joined your group',time:'1day ago' },
  {img:<img src={Rizky}/>,  id: 4, text: 'Rizky Hasanuddin sent you a private message', read: true , type:'sent you a private message',time:'5days ago' },
  {img:<img src={kimberly}/>,  id: 5, text: 'Kimberly Smith commented on your picture', read: true ,type:'sent you a private message',time:'5days ago'},
  {img:<img src={nathan}/>,  id: 6, text: 'Nathan Peterson reacted to your recent post', read: false,type:'sent you a private message',time:'5days ago' },
  {img:<img src={Anna}/>,  id: 7, text: 'Anna Kim left the group', read: true,type:'sent you a private message',time:'5days ago' },
];


function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      read: true,
    }));
    setNotifications(updatedNotifications);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Notifications</h1>
        
        <button onClick={markAllAsRead} name='button'><label className=" btn">7</label> Mark all as read</button>
      </header>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id} className={notification.read ? 'read' : 'unread'}>
            {notification.img}
            <p> {notification.text}</p>
            <h4> {notification.type}  </h4>
            <span>{notification.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;