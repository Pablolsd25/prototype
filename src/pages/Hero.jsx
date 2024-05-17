import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../api/api"; // Ajusta la ruta según tu estructura de carpetas

const Hero = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchUserInfo = async () => {
    try {
      const user = await getUserInfo();
      setUserInfo(user);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        {error ? (
          <div>Error: {error}</div>
        ) : (
          <>
            {userInfo && (
              <>
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
                  <div className="flex w-full">
                    <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          navigate("/user-info", { state: { userInfo } })
                        }
                      >
                        Ver
                      </button>
                    </div>
                    <div className="divider divider-horizontal">OR</div>
                    <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
                      <button
                        className="btn btn-primary"
                        onClick={fetchUserInfo}
                      >
                        Siguiente
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
