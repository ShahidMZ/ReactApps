import { useState } from "react";
import "./App.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [currentFriend, setCurrentFriend] = useState(null);

  function handleAddFriend() {
    setShowAddFriend((x) => !x);

    // Close the Split Bill form
    setCurrentFriend(null);
  }

  function handleSelectFriend(friend) {
    setCurrentFriend(friend);

    // Close the Add Friend form
    setShowAddFriend(false);
  }

  function handleSplitBill(newBalance) {
    // Update the friend object with the new balance
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === currentFriend.id
          ? { ...friend, balance: newBalance }
          : friend,
      ),
    );

    // Close the Split Bill form
    setCurrentFriend(null);
  }

  return (
    <>
      <h1 className="name">Eat-'N-Split</h1>
      <div className="app">
        <div className="sidebar">
          <FriendsList
            friends={friends}
            currentFriend={currentFriend}
            onSelectFriend={handleSelectFriend}
          ></FriendsList>

          {showAddFriend && (
            <FormAddFriend
              setShowAddFriend={setShowAddFriend}
              setFriends={setFriends}
            />
          )}

          <Button onClick={handleAddFriend}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>

        {currentFriend && (
          <FormSplitBill friend={currentFriend} onSplitBill={handleSplitBill} />
        )}
      </div>
    </>
  );
}

function FriendsList({ friends, currentFriend, onSelectFriend }) {
  return (
    <ul>
      {friends.map((x) => (
        <Friend
          friend={x}
          key={x.id}
          currentFriend={currentFriend}
          onSelectFriend={onSelectFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, currentFriend, onSelectFriend }) {
  const isSelected = currentFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
      {friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you ${friend.balance}
        </p>
      ) : (
        <p>You are even</p>
      )}
      <Button
        onClick={() =>
          isSelected ? onSelectFriend(null) : onSelectFriend(friend)
        }
      >
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ setShowAddFriend, setFriends }) {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    // Return if no name or url prsent
    if (!name || !imageURL) {
      return;
    }

    // Create a new friend object and add it to the list
    const id = crypto.randomUUID();

    const newFriend = {
      id: id,
      name: name,
      image: `${imageURL}?=${id}`,
      balance: 0,
    };

    console.log(newFriend);
    setFriends((x) => [...x, newFriend]);

    // Reset the fields
    setName("");
    setImageURL("https://i.pravatar.cc/48");

    // Hide the form
    setShowAddFriend(false);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>💏 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(x) => setName(x.target.value)}
      />

      <label>👦 Image URL</label>
      <input
        type="text"
        value={imageURL}
        onChange={(x) => setImageURL(x.target.imageURL)}
      />

      <Button>Add</Button>
    </form>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FormSplitBill({ friend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const [payer, setPayer] = useState("user");

  let friendsExpense = bill - userExpense;

  function handleSubmit(e) {
    e.preventDefault();

    // Return if a field is empty or if the user expense is higher than the bill
    if (bill === "" || userExpense === "" || userExpense > bill) {
      console.log("Returning...");
      return;
    }

    // Calculate the new balance
    let newBalance =
      payer === "user"
        ? friend.balance + friendsExpense
        : friend.balance - userExpense;

    console.log(newBalance);

    // Update the friend object with the new balance
    onSplitBill(newBalance);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(x) => setBill(+x.target.value)}
      />

      <label>📈 Your expense</label>
      <input
        type="text"
        value={userExpense}
        onChange={(x) => {
          setUserExpense(
            +x.target.value > bill ? userExpense : +x.target.value,
          );
        }}
      />

      <label>📒 {friend.name}'s expense</label>
      <input type="text" value={friendsExpense} disabled />

      <label>🗿 Who is paying the bill?</label>
      <select value={payer} onChange={(x) => setPayer(x.target.value)}>
        <option value={"user"}>You</option>
        <option value={"friend"}>{friend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
