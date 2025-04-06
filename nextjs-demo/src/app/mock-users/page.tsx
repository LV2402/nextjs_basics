// app/mock-users/page.tsx (or wherever you're placing it)

"use client";

import { revalidatePath } from "next/cache";
import { useState, useEffect } from "react";

type MockUser = {
  id: number;
  name: string;
};

export default function Users() {
  const [users, setUsers] = useState<MockUser[]>([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchUsers() {
    try {
      const res = await fetch(
        "https://67e95f24bdcaa2b7f5b93d27.mockapi.io/users",
        { cache: "no-store" }
      );
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError("Failed to load users");
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  async function addUser(formData: FormData) {
    const name = formData.get("name");

    if (!name || typeof name !== "string") return;

    try {
      setLoading(true);
      const res = await fetch(
        "https://67e95f24bdcaa2b7f5b93d27.mockapi.io/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        }
      );

      if (!res.ok) throw new Error("Failed to add user");

      const newUser = await res.json();
      setUsers((prev) => [...prev, newUser]);
      setName("");
      revalidatePath("/mock-users");
    } catch (error) {
      console.error(error);
      setError("Could not add user.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="py-10 max-w-3xl mx-auto">
      <form
        action={async (formData) => {
          await addUser(formData);
        }}
        className="mb-6 flex items-center gap-2"
      >
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          minLength={2}
          maxLength={30}
          className="p-2 border border-gray-300 rounded text-gray-700 flex-1"
          placeholder="Enter user name"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add User"}
        </button>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user: MockUser) => (
          <div
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}
