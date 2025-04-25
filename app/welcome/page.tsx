"use client";

import React from "react";

const HNWelcome = () => {
  return (
    <div className="bg-white min-h-screen p-4 font-sans text-sm">
      <div className="mx-auto max-w-3xl border rounded bg-[#f6f6ef]">
        <div className="flex items-center px-4 py-2">
          <div className="bg-orange-500 w-12 h-12 flex items-center justify-center text-white font-bold text-2xl mr-2">
            Y
          </div>
          <h1 className="text-3xl font-semibold text-orange-600">Combinator</h1>
        </div>
        <div className="px-6 pb-6 text-[#000]">
          <h2 className="font-bold mt-2">Welcome to Hacker News</h2>
          <p className="mt-2">
            <a href="#" className="text-blue-700 underline">
              Hacker News
            </a>{" "}
            is a bit different from other community sites, and we’d appreciate it if
            you’d take a minute to read the following as well as the{" "}
            <a href="#" className="text-blue-700 underline">
              official guidelines
            </a>.
          </p>
          <p className="mt-2">
            HN is an experiment. As a rule, a community site that becomes popular will decline in
            quality. Our hypothesis is that this is not inevitable—that by making a conscious effort
            to resist decline, we can keep it from happening.
          </p>
          <p className="mt-2">
            Essentially there are two rules here: don’t post or upvote crap links, and don’t be rude
            or dumb in comment threads.
          </p>
          <p className="mt-2">
            A crap link is one that’s only superficially interesting. Stories on HN don’t have to be
            about hacking, because good hackers aren’t only interested in hacking, but they do have
            to be deeply interesting.
          </p>
          <p className="mt-2">
            What does “deeply interesting” mean? It means stuff that teaches you about the world. A
            story about a robbery, for example, would probably not be deeply interesting. But if
            this robbery was a sign of some bigger, underlying trend, perhaps it could be.
          </p>
          <p className="mt-2">
            The worst thing to post or upvote is something that’s intensely but shallowly
            interesting: gossip about famous people, funny or cute pictures or videos, partisan
            political articles, etc. If you let that sort of thing onto a news site, it will push
            aside the deeply interesting stuff, which tends to be quieter.
          </p>
          <p className="mt-2">
            The most important principle on HN, though, is to make thoughtful comments. Thoughtful in
            both senses: civil and substantial.
          </p>
          <p className="mt-2">
            The test for substance is a lot like it is for links. Does your comment teach us
            anything? There are two ways to do that: by pointing out some consideration that hadn’t
            previously been mentioned, and by giving more information about the topic, perhaps from
            personal experience. Whereas comments like “lol” or “That’s the dumbest thing I ever
            heard” teach us nothing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HNWelcome;
