import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password) return setError("Please enter a new password");
    if (password !== confirmPassword) return setError("Passwords do not match");

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch(`http://localhost:5000/api/auth/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data || "Failed to reset password");
      }

      setMessage(data.message || "Your password has been reset successfully!");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl w-96 shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Reset Password</h1>
        <p className="text-gray-500 text-sm mb-6">
          Please enter and confirm your new password below.
        </p>

        {message ? (
          <div>
            <div className="bg-green-50 border border-green-200 text-green-700 text-sm p-3 rounded mb-6">
              {message}
            </div>
            <Link
              to="/login"
              className="block text-center bg-black text-white w-full py-2.5 rounded font-medium hover:bg-neutral-800 transition-colors duration-200"
            >
              Go to Login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded mb-4">
                {error}
              </div>
            )}

            <div className="mb-3">
              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2.5 w-full rounded text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                disabled={loading}
                required
              />
            </div>

            <div className="mb-5">
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border p-2.5 w-full rounded text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                disabled={loading}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white w-full py-2.5 rounded font-medium hover:bg-neutral-800 transition-colors duration-200 disabled:bg-gray-400"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
