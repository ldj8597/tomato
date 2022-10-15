import { trpc } from "../../utils/trpc";
import Avatar from "./Avatar";
import Button from "./Button";

export default function RandomUser() {
  const usersQuery = trpc.user.random.useQuery();
  const followMutation = trpc.user.follow.useMutation();

  return (
    <div className="rounded-xl bg-slate-100">
      <h3 className="px-4 py-2 text-lg font-bold">Who to follow</h3>
      {usersQuery.data &&
        usersQuery.data.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between px-4 py-4 hover:bg-slate-200"
          >
            <div className="flex items-center gap-3">
              <Avatar image={user.image} />
              <div>
                <p className="text-sm font-semibold">{user.name}</p>
                <p className="text-sm">@{user.email?.split("@")[0]}</p>
              </div>
            </div>
            <Button
              onClick={() => {
                if (followMutation.isLoading) return;
                followMutation.mutate({ followingId: user.id });
              }}
              text="Follow"
              className="bg-slate-700 py-1 hover:bg-slate-800 focus:ring-slate-800 disabled:bg-slate-200"
            />
          </div>
        ))}
      <button className="w-full rounded-b-lg px-4 py-2 text-left text-blue-400 hover:bg-slate-200">
        Show more
      </button>
    </div>
  );
}
