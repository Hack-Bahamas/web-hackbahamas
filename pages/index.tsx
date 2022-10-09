import type { NextPage } from "next";
import * as React from "react";
import Image from "next/image";
import hackclub1 from "../public/assets/1hack_club_assemble_00711.jpg";
import hackclub2 from "../public/assets/2hack_club_assemble_01601.jpg";
import hackclub from "../public/assets/dinoassemble.jpg";

const Home: NextPage = () => {

  const [counter, setCounter] = React.useState(3);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  return (
    <>
      <div className="main">
        <div className="text-[84px] hacktext font-extrabold">{counter}</div>
      </div>
      <div className="text-white md:w-[80%] items-center mx-auto justify-between px-10 mt-5">
        <div className="text-[3rem] font-bold hackathon mt-2">
          What is a Hackathon?
        </div>
        <div className="hackathon text-[38px] items-center font-extrabold">
          A <span className="text-blue-300">hackathon</span> is a social coding
          event{" "}
          <span className="text-green-300">
            where teens <br></br>come together
          </span>{" "}
          to build projects in a short amount <br></br>of time and{" "}
          <span className="text-red-400">share them with the world.</span>
        </div>
      </div>

      <div className="text-white md:w-[80%] items-center mx-auto justify-between px-10 mt-5  ">
        <div className="text-white hackathon text-[48px]">
          At Hack Bahamas, 100+ teenagers will gather to:
        </div>
        <div className="md:flex gap-2">
          <div className="border-[4px] border-yellow-400 md:w-[40%] px-5  mt-2 ">
            <div className="font-extrabold text-[32px] mt-5">
              Share Their Knowledge
            </div>
            <div className=" text-[20px] hackathon font-medium">
              At Hack Bahamas, you'll be able to give & attend <br></br>
              workshops from peers, gain experience, make connections,<br></br>{" "}
              and discover yourself. You'll meet new people, get help<br></br>{" "}
              from peers, and support your fellow hackers.
            </div>
          </div>
          <div className="border-[4px]  border-black md:w-[40%]  mt-2 ">
            <Image src={hackclub1} className="md:img" />
          </div>
        </div>
      </div>

      <div className="text-white md:w-[80%] items-center mx-auto justify-between px-10 mt-1  ">
        <div className="md:flex gap-2">
          <div className="border-[4px]  border-black md:w-[40%]  mt-2 ">
            <Image src={hackclub2} className="md:img" />
          </div>
          <div className="border-[4px]  border-blue-400 md:w-[40%] px-5  mt-2 ">
            <div className="font-extrabold text-[32px] mt-5">
              Build The Unexpected
            </div>
            <div className=" text-[20px] hackathon font-medium">
              At Hack Bahamas, you're encouraged to create a project<br></br> no
              hacker would expect to see at demos. You'll build<br></br>{" "}
              something to showcase to other hackers, not pitching to<br></br>{" "}
              impress a business-type. Learning and creating is valued<br></br>{" "}
              far above a long-term product plan.
            </div>
          </div>
        </div>
      </div>

      <div className="text-white md:w-[80%] items-center mx-auto justify-between px-10">
        <div className="md:flex gap-2">
          <div className="border-[4px] border-gray-700 md:w-[40%] px-5  mt-2 ">
            <div className="font-extrabold text-[32px] mt-">
              Create Lifelong Memories
            </div>
            <div className=" text-[20px] hackathon font-medium">
              We won't be coding all 48 hours. We'll come together<br></br> to
              have fun, get to know one another and participate in<br></br> all
              sorts of activities. The people you meet at a hackathon
              <br></br> are special, you'll have wonderful conversations with
              your<br></br> fellow attendees and get inspired from each other.
            </div>
          </div>
          <div className="border-[4px] border-black md:w-[40%]  mt-2 ">
            <Image src={hackclub} className="md:img" />
          </div>
        </div>
      </div>
      <div className="bg-blue-700 mt-5">
        <div className="text-white md:w-[80%] items-center mx-auto justify-between px-10 mt-10">
          <div className="underline text-[32px] hackathon font-bold pt-10">
            The Rundown & Registration
          </div>
          <div className="items-center text-[24px] bg-white text-black px-5 mt-5 pt-5 pb-5 hackathon">
            <span className="font-bold">Date & Time:</span> Starts at 6:00pm on
            December 17th and ends at 10:00am on December 18th.
          </div>
          <div className="items-center text-[24px] bg-white text-black px-5 mt-5 pt-5 pb-5 hackathon">
            <span className="font-bold">Venue:</span> TBD
          </div>
          <div className="items-center text-[24px] bg-white text-black px-5 mt-5 pt-5 pb-5 hackathon">
            <span className="font-bold">Eligibility:</span> all secondary
            school, junior college & pre-university students are welcome to join
            (no experience required!).
          </div>
          <div className="items-center text-[24px] bg-white text-black px-5 mt-5 pt-5 pb-5 hackathon">
            <span className="font-bold">COVID-19:</span> We require all
            participants to be vaccinated against COVID-19 or to have a medical
            exemption. We will be providing participants with N95 masks (for
            optional but recommended usage, inline with MOH guidelines).
          </div>
          <button className="items-center text-[24px] bg-yellow-500 text-white px-5 mt-5 pt-5 pb-5 hackathon w-[100%] mb-5 font-bold underline">
            REGISTER ➚
          </button>
        </div>
      </div>
      <div className="md:w-[80%] items-center mx-auto justify-between px-5 mt-10">
        <div className="text-white underline font-extrabold hackathon text-[48px]">
          Anything Else?
        </div>

        <div className="text-white flex gap-5 mt-5">
          <div className="bg-white text-black  md:w-[40%] h-[150px] px-5 rounded-sm">
            <div className="font-bold mt-5">What do I need?</div>
            <div>
              Your laptop, chargers, anything for your hack (hardware?), and an
              open mind.
            </div>
          </div>
          <div className="bg-white text-black  md:w-[40%] h-[150px] px-5 rounded-sm">
            <div className="font-bold mt-5">How much does it cost?</div>
            <div>
              Nothing! We’ll have meals, snacks, and beverages onsite at the
              hackathon, as well as swag, prizes, and fun mini-events.
            </div>
          </div>
          <div className="bg-white text-black md:w-[40%] h-[150px] px-5 rounded-sm">
            <div className="font-bold mt-5">Who is judging?</div>
            <div>
              Judging is done by the people that matter the most– attendees. If
              you ship a project you can vote on other projects. That said,
              we'll still have pretty cool people hang out with us.
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[80%] items-center mx-auto justify-between px-5 mt-1 mb-5">
        <div className="text-white flex gap-5 mt-5">
          <div className="bg-white text-black  md:w-[40%] h-[150px] px-5 rounded-sm">
            <div className="font-bold mt-5">I'm not that good at coding...</div>
            <div>
              This hackathon is for hackers of all skill levels! We'll have
              workshops and other events so join us and let's learn together. If
              you'd like to start exploring some introductory projects, check
              out{" "}
              <a href="https://workshops.hackclub.com/" className="underline">
                Hack Club Workshops.
              </a>
            </div>
          </div>
          <div className="bg-white text-black  md:w-[40%] h-[150px] px-5 rounded-sm">
            <div className="font-bold mt-5">What can I make?</div>
            <div>
              Anything! Apps, art, sites, and hardware projects are all perfect
              for a hackathon.
            </div>
          </div>
          <div className="bg-white text-black md:w-[40%] h-[150px] px-5 rounded-sm">
            <div className="font-bold mt-5">My parents are worried!</div>
            <div>
              We're here to help, ask them to reach out to us at
              <span className="underline">
                <a href="mailto:team@hackbahamas.com"> team@hackbahamas.com</a>
              </span>{" "}
              and we'll make sure to answer all their questions. Hack Bahamas
              will be supervised by background checked adults.
            </div>
          </div>
        </div>
        <div className="text-white mt-5">
          Interested in sponsoring & helping create a magical programming
          experience<br></br> for teenagers in The Bahamas?{" "}
          <a href="mailto:team@hackbahamas.com" className="underline">
            Drop us a line on email
          </a>{" "}
          or{" "}
          <a
            href="https://bank.hackclub.com/donations/start/hack-bahamas"
            className="underline"
          >
            donate directly!
          </a>
        </div>
      </div>
      <footer className="mt-10 bg-blue-700 h-20 rounded-sm w-full">
        <div className="text-center pt-10 text-[20px] hackathon text-white">
          This Event is fiscally sponsored by{" "}
          <a className="underline" href="https://the.hackfoundation.org/">
            The Hack Foundation.
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
