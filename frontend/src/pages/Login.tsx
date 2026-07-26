import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse: { credential?: string }) => {
    try {
      const { data } = await api.post("/auth/google", {
        credential: credentialResponse.credential,
      });
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch {
      navigate("/login");
    }
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => {
          navigate("/login");
        }}
        shape="pill"
        theme="outline"
      />
    </div>
  );
}
