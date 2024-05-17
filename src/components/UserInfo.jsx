import { useLocation } from "react-router-dom";

const UserInfo = () => {
  const location = useLocation();
  const { userInfo } = location.state;

  return (
    <div className="min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={userInfo.picture.large}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="User"
        />
        <div>
          <h1 className="text-5xl font-bold">
            {userInfo.name.first} {userInfo.name.last}
          </h1>
          <p className="py-6">
            <strong>Email:</strong> {userInfo.email}
            <br />
            <strong>Phone:</strong> {userInfo.phone}
            <br />
            <strong>Location:</strong> {userInfo.location.city},{" "}
            {userInfo.location.country}
          </p>
          <p className="py-6">
            <strong>Gender:</strong> {userInfo.gender}
            <br />
            <strong>Age:</strong> {userInfo.dob.age}
            <br />
            <strong>Username:</strong> {userInfo.login.username}
          </p>
          <p className="py-6">
            <strong>Street:</strong> {userInfo.location.street.number}{" "}
            {userInfo.location.street.name}
            <br />
            <strong>State:</strong> {userInfo.location.state}
            <br />
            <strong>Postal Code:</strong> {userInfo.location.postcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
