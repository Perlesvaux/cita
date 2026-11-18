import { useState } from 'react';
import { TextField } from './TextField';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{
        maxWidth: 360,
        margin: '3rem auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
    >
      <TextField
        label="Email or phone"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        required
      />

      <TextField
        label="Enter your password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        required
      />
    </form>
  );
}


//import { useState } from 'react'
//
//function App() {
//  const [search, setSearch] = useState("")
//
//  return (
//    <>
//    <div className="tray">
//
//      <div className="field">
//        <input 
//          type="text" 
//          id="search" 
//          placeholder="Mateo 6:7" 
//          value={search}
//          onChange={(e)=>setSearch(e.currentTarget.value)}
//        />
//        <label htmlFor="search">Busqueda</label>
//      </div>
//
//    </div>
//
//
//    </>
//  )
//}
//
//export default App
