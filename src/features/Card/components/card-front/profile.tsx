import pfp from "@/assets/private/pfp.png";

export function Profile({ username }: { username: string }) {
  return (
    <section className="z-20 flex w-full flex-col items-center justify-center gap-1">
      {/* Profile picture */}
      <div
        style={{ backgroundImage: `url(${pfp})` }}
        className="bg-blax shadow-blax h-35 w-35 rounded-full border border-zinc-400 bg-cover bg-center shadow-md"
      />
      {/* Username */}
      <h1 className="font-inter font-medium">
        <span className="pr-1 font-light italic">@</span>
        {username}
      </h1>
    </section>
  );
}
