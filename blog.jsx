// --- ICON COMPONENTS ---

const SunIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MoonIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

// --- DATA ---

const posts = [
  {
    id: 1,
    slug: "whats-disturbing-you-one-thing-at-a-time",
    title: "What’s Disturbing You? The Lost Art of Doing One Thing at a Time",
    date: "November 1, 2025",
    excerpt: "We're disturbed, distracted, and disconnected. This post explores why we've lost the ability to focus and how to reclaim it by doing one thing at a time.",
    content: `
      <p class="mb-4">"What's disturbing you?"</p>
      <p class="mb-4">It's a heavy question. And if you're like most of us, the answer is... well, <em>everything</em>.</p>
      <p class="mb-4">It’s the unread emails, the text you need to reply to, the assignment that's half-finished, the show everyone is talking about, and the nagging feeling that you should be doing something else. We're disturbed, distracted, and disconnected.</p>
      <p class="mb-4">But there's a simple, powerful idea that cuts through this noise:</p>
      
      <blockquote class="p-4 my-4 bg-gray-50 dark:bg-gray-800 border-l-4 border-gray-300 dark:border-gray-600">
        <p class="italic font-medium">"You can do many things if you focus on <u>one thing at the time</u> when it is needed."</p>
      </blockquote>
      
      <p class="mb-4">This single sentence explains what’s gone wrong, and how to start fixing it.</p>
      
      <hr class="my-6 border-gray-200 dark:border-gray-700">
      
      <h3 class="text-xl font-semibold mb-2 mt-6">👶 Scenario 1: Life on Rails</h3>
      <p class="mb-4">Remember being a kid? Think about the rhythm of it.</p>
      <p class="mb-4">You’d come home from school. Maybe you’d grab a snack, go take a bath, and then sit down to finish your homework. Or, you’d run straight outside to play with neighborhood friends, your only deadline the sound of your name being called for dinner. By 9:30 or 10:00 PM, you were in bed.</p>
      <p class="mb-4">Your world was simple. It was structured. When you were playing, you were <strong>just playing</strong>. When you were doing homework, you were (mostly) <strong>just doing homework</strong>. You lived your life <u>one thing at a time</u>.</p>
      
      <h3 class="text-xl font-semibold mb-2 mt-6">🧑‍🎓 Scenario 2: The Age of Overwhelm</h3>
      <p class="mb-4">Now, imagine today.</p>
      <p class="mb-4">You come home from college or work. You crash on your bed, phone in hand. You don't feel like taking a bath. You scroll past mealtime, only eating when you're reminded or when starvation wins. Sleep? That happens somewhere between 2 AM and "oops, my alarm."</p>
      <p class="mb-4">You have a paper to write, a room to clean, and a friend to call back. But you do none of it. You're paralyzed, stuck in a loop of distraction and anxiety. You just don't "feel like it."</p>
      <p class="mb-4">So, what changed?</p>
      <p class="mb-4"><strong>You Grew Up.</strong></p>
      <p class="mb-4">But it's not just that. "Growing up" used to mean more responsibility, but it now means something else: <strong>infinite choice and zero structure.</strong></p>
      <p class="mb-4">As a kid, your structure was given to you. As an adult, <em>you</em> are supposed to build it. And in the modern world, especially in the five years since COVID-19 rewired our lives, that's become almost impossible.</p>
      
      <hr class="my-6 border-gray-200 dark:border-gray-700">
      
      <h3 class="text-xl font-semibold mb-2 mt-6">📉 Why We "Don't Feel Like It"</h3>
      <p class="mb-4">The user in Scenario 2 isn't lazy. They're overloaded. Their brain is trying to do everything at once, and it has chosen to do nothing instead.</p>
      
      <h4 class="text-lg font-semibold mb-2 mt-4">1. The Meaning of "Fun" Has Changed</h4>
      <p class="mb-4">Fun used to be <strong>active</strong> and <strong>present</strong> (playing outside, Scenario 1). Now, "fun" is often <strong>passive</strong> and <strong>digital</strong> (scrolling, binging). These digital "rewards" are so easy and instant that they make real-world effort, like cooking a meal or studying, feel impossibly hard.</p>
      
      <h4 class="text-lg font-semibold mb-2 mt-4">2. The Meaning of "Relationship" Has Changed</h4>
      <p class="mb-4">Your prompt noted that "youngsters and the kids... don't share anything to their family or friends." This is a heartbreaking symptom of the same disease.</p>
      <p class="mb-4">Life is supposed to be a "memory to be shared." But you can't share a memory you never fully made. When we're half-present, scrolling while talking, or thinking about our to-do list while with family, we aren't <em>making</em> memories. We're just... passing time. We have nothing to share because we were never really <em>there</em>.</p>
      
      <h4 class="text-lg font-semibold mb-2 mt-4">3. We Lost the "How-To"</h4>
      <p class="mb-4">This state of paralysis—being in college or unemployed and "unable to do anything"—is a direct consequence of a brain that has forgotten <em>how</em> to focus.</p>
      <p class="mb-4">This is where books on the topic become essential. In <strong>"Deep Work,"</strong> author Cal Newport argues that the ability to focus without distraction is a modern superpower. Our "Scenario 2" life is the exact opposite: a life of constant, "shallow" distraction. We try to study with notifications on, write an email while listening to a podcast, and talk to a friend while checking the news. We're doing three things poorly instead of <u>one thing well</u>.</p>
      
      <hr class="my-6 border-gray-200 dark:border-gray-700">
      
      <h3 class="text-xl font-semibold mb-2 mt-6">🛠️ Rebuilding Your Focus, One Thing at a Time</h3>
      <p class="mb-4">We can't go back to being kids. But we can steal their secret. We can re-introduce <strong>structure</strong> and <strong>singularity</strong>.</p>
      <p class="mb-4">This is the core idea of books like <strong>"Atomic Habits" by James Clear.</strong> The problem isn't you; it's your <em>system</em>. Scenario 2 is a bad system.</p>
      <p class="mb-4">Here’s how to start building a new one:</p>
      
      <ul class="list-disc list-inside mb-4 pl-4">
        <li class="mb-2"><strong>Embrace "Monotasking."</strong> This is the real-world application of "<u>one thing at a time</u>." Want to watch a show? Great. <em>Just</em> watch the show. Put your phone in another room. Want to study? Set a timer for 30 minutes. For that 30 minutes, it's just you and the textbook. No phone. No other tabs.</li>
        <li class="mb-2"><strong>Create Physical Boundaries.</strong> The kid in Scenario 1 had clear boundaries: the dinner bell, the bedtime, the schoolhouse. You need to create your own. Don't work in your bed. Make your desk a "work-only" zone. Make your bed a "sleep-only" zone.</li>
        <li class="mb-2"><strong>Schedule "Play" and "Rest."</strong> You used to go out to play "till dinner." That was scheduled play. Do it again. Put "Go for a 30-minute walk" in your calendar. Schedule "Read a book for fun." And most importantly, schedule a <em>bedtime</em>. Give yourself the structure you crave.</li>
      </ul>
      
      <p class="mb-4">What’s disturbing you is the noise. It’s the constant pull of a thousand different possibilities that leaves you doing nothing.</p>
      <p class="mb-4">The solution is to get quiet. To get focused. To close all the other tabs in your brain and just be here, doing this <strong>one thing.</strong></p>
      <p class="mb-4">You don't have to fix your whole life today. You just have to do <u>one thing at a time</u>. Maybe, for now, that one thing is as simple as getting up and taking that bath.</p>
    `
  },
  {
    id: 2,
    slug: "lost-art-of-doing-nothing-boredom-superpower",
    title: "The Lost Art of Doing Nothing: Why Boredom is Your Superpower",
    date: "November 2, 2025",
    excerpt: "We've 'cured' boredom with our phones, but in doing so, we've lost our creativity and ability to self-reflect. This post explores why boredom is a superpower.",
    content: `
      <p class="mb-4">What is the first thing you do when you have 10 seconds of downtime?</p>
      <p class="mb-4">In the elevator. Waiting for your coffee. Sitting at a red light.</p>
      <p class="mb-4">I'm guessing you reached for your phone.</p>
      <p class="mb-4">We have all become "in-between" fillers. We fill every small, empty moment with a scroll, a refresh, or a quick game. We have definitely "cured" boredom. But in doing so, we have accidentally "cured" something else: our creativity, our ability to solve problems, and our capacity for new ideas.</p>
      <p class="mb-4">In our last post, we talked about two scenarios:</p>
      
      <ul class="list-disc list-inside mb-4 pl-4">
        <li class="mb-2"><strong>Scenario 1:</strong> That kid, who, with nothing to do, would go outside and invent a game, build a fort, or just stare at the clouds.</li>
        <li class="mb-2"><strong>Scenario 2:</strong> A grown person who, without a thing in the world to do, instantly feels anxious and grabs a device to <em>find</em> something to do.</li>
      </ul>
      
      <p class="mb-4">The crucial difference? <strong>The kid in Scenario 1 was allowed to be bored.</strong></p>
      <p class="mb-4">We seem to view boredom as a negative state, a problem that needs to be solved. We've come to think of it as a sign of laziness or a waste of time. But the truth is, boredom isn't a void. It's a forge.</p>
      
      <h3 class="text-xl font-semibold mb-2 mt-6">Our War on Boredom</h3>
      <p class="mb-4">Our brains are hardwired to hate under-stimulation. We crave input. And in the modern world, we get it, infinitely. Our phone is a non-stop, high-speed, personalized entertainment machine.</p>
      <p class="mb-4">We're so good at avoiding boredom now that we've become <em>afraid</em> of it. The minute we feel it creep in, we reach for our digital pacifier.</p>
      <p class="mb-4">What is the cost of that? The brain never gets a day off.</p>
      <p class="mb-4">It's like a muscle that's being kept tense, 24/7; it never gets a chance to relax, process, and recover. We're in this constant state of "shallow" engagement-half watching a show, half-listening to a podcast, half-reading an article-but never in a state of <em>nothing</em>.</p>
      <p class="mb-4">And that's where the magic happens: in "nothing".</p>
      
      <hr class="my-6 border-gray-200 dark:border-gray-700">
      
      <h3 class="text-xl font-semibold mb-2 mt-6">⚡️ The "Superpowers" Boredom Unlocks</h3>
      <p class="mb-4">When this stream of input stops, your brain doesn't just shut down. Instead, it flips into another mode-a powerfully creative one. The experts call this the <strong>"Default Mode Network" or DMN.</strong></p>
      <p class="mb-4">Think of it like your brain's "screensaver." But this screensaver isn't just bouncing a logo around; it's actively connecting old ideas to create new ones.</p>
      <p class="mb-4">This is your superpower, and here's what it unlocks:</p>
      
      <h4 class="text-lg font-semibold mb-2 mt-4">1. The Creativity Engine</h4>
      <p class="mb-4">You know the "shower thought"? That great idea or solution that comes to you while shampooing? That's the DMN at work: You're in a warm, safe, <em>boring</em> place with no phone. Your brain finally has the space to connect the dots. You can't schedule a "shower thought," but you <em>can</em> schedule the boredom that creates it.</p>
      
      <h4 class="text-lg font-semibold mb-2 mt-4">2. The Problem Solver</h4>
      <p class="mb-4">You cannot solve a complex problem by staring at it harder. You solve it by walking away. When you "do nothing"—go for a walk, wash the dishes, or just stare out the window—you let your subconscious mind take over. It "defragments" the problem, like a computer running a background check. When you return, the answer often feels "obvious."</p>
      
      <h4 class="text-lg font-semibold mb-2 mt-4">3. The 'Who Am I?' Compass</h4>
      <p class="mb-4">In our last post, we talked about how we no longer share our thoughts with family or friends. An even greater, sadder question is: do we even <em>know</em> our own thoughts? If you are never alone with your mind, you never get to hear what it's trying to tell you. Boredom is the doorway to self-reflection. It's where you check in with yourself, process your feelings, and figure out what you <em>actually</em> want.</p>
      
      <hr class="my-6 border-gray-200 dark:border-gray-700">
      
      <h3 class="text-xl font-semibold mb-2 mt-6">How to Practice the Lost Art</h3>
      <p class="mb-4">You don't have to go on a 7-day silent retreat. You can start now, taking back this superpower in micro-doses.</p>
      
      <ul class="list-disc list-inside mb-4 pl-4">
        <li class="mb-2"><strong>Start Small: The 5-Minute Rule</strong> The next time you are waiting for the microwave, or your computer to restart, or the kettle to boil... just <em>wait</em>. Don't pull out your phone. Look out the window. Listen to the room. Just be. It will feel weird. That's good.</li>
        <li class="mb-2"><strong>Go Analog</strong> Keep one "analog" activity. This could be a physical book, not on a tablet; a journal and a pen; a musical instrument; or just a notepad to doodle on. Make it a phone-free activity.</li>
        <li class="mb-2"><strong>Walk Without Wires</strong> This is the big one. Take a 15-minute walk. Leave your phone at home. Or, at the very least, don't play a podcast or music. Just walk. Listen to the world. Listen to your own footsteps.</li>
      </ul>
      
      <p class="mb-4">Boredom is not an enemy. It’s not a bug in our system; it's a critical feature. It’s the quiet, empty space where our brain finally has permission to build, to invent, and to hear itself think.</p>
      <p class="mb-4">Take a moment this week to do nothing. Don't fill it. Let it be empty. See what rushes in to fill the space.</p>
    `
  },
  // Add new posts here, e.g.:
  // {
  //   id: 3,
  //   slug: "new-post-slug",
  //   title: "My New Post",
  //   date: "November 3, 2025",
  //   excerpt: "This is a brand new post.",
  //   content: `<p>Content goes here.</p>`
  // },
];

// --- HOOKS ---
function useTheme() {
  // We MUST use React.useState, React.useLayoutEffect, and React.useEffect
  // to reference the global React object loaded from index.html.
  const [theme, setTheme] = React.useState('light');

  React.useLayoutEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
  }, []);

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return [theme, toggleTheme];
}

// --- COMPONENTS ---

const Header = ({ setPage, theme, toggleTheme }) => {
  return (
    <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-10">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <button
          onClick={() => setPage({ type: 'home' })}
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Scenario Two
        </button>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setPage({ type: 'home' })}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Home
          </button>
          {/* <button
            onClick={() => setPage({ type: 'privacy' })}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Privacy
          </button> */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </button>
        </div>
      </nav>
    </header>
  );
};

const PostCard = ({ post, setPage }) => {
  return (
    <article className="mb-8">
      <h2 className="text-2xl font-bold mb-2">
        <button
          onClick={() => setPage({ type: 'post', slug: post.slug })}
          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 text-left"
        >
          {post.title}
        </button>
      </h2>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{post.date}</p>
      <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
      <button
        onClick={() => setPage({ type: 'post', slug: post.slug })}
        className="text-blue-600 dark:text-blue-400 hover:underline mt-3 inline-block"
      >
        Read more &rarr;
      </button>
    </article>
  );
};

const HomePage = ({ posts, setPage }) => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Latest Posts</h1>
      {posts.map(post => (
        <PostCard key={post.id} post={post} setPage={setPage} />
      ))}
    </div>
  );
};

const PostPage = ({ post }) => {
  if (!post) {
    return (
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Post not found</h1>
        <p className="text-gray-700 dark:text-gray-300">Sorry, we couldn't find the post you're looking for.</p>
      </div>
    );
  }

  return (
    <article className="py-8">
      <h1 className="text-4xl font-extrabold mb-3 text-gray-900 dark:text-white">{post.title}</h1>
      <p className="text-gray-500 dark:text-gray-400 text-base mb-8">{post.date}</p>
      
      {/* This uses the Tailwind 'prose' plugin (loaded in index.html)
          for beautiful blog post styling.
      */}
      <div
        className="prose dark:prose-invert prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

// const PrivacyPolicyPage = () => {
//   return (
//     <div className="py-8">
//       <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-200 dark:border-gray-700">
//         <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
//           Privacy Policy
//         </h1>
//         <p className="text-gray-600 dark:text-gray-400 mb-6">
//           Last updated: {new Date().getFullYear()}
//         </p>

//         <div className="mb-6">
//           <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
//             Information We Collect
//           </h2>
//           <p className="text-gray-700 dark:text-gray-300 mb-2">
//             We collect minimal information necessary to provide our service:
//           </p>
//           <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
//             <li>Account information (name, email)</li>
//             <li>Community memberships and events</li>
//             <li>Activity logs for community management</li>
//           </ul>
//         </div>

//         <hr className="my-6 border-gray-200 dark:border-gray-700" />

//         <div className="mb-6">
//           <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
//             How We Use Your Information
//           </h2>
//           <p className="text-gray-700 dark:text-gray-300 mb-2">
//             Your data is used solely to:
//           </p>
//           <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
//             <li>Provide and maintain TimeLink services</li>
//             <li>Manage community events and memberships</li>
//             <li>Send important service notifications</li>
//           </ul>
//         </div>

//         <hr className="my-6 border-gray-200 dark:border-gray-700" />

//         <div className="mb-6">
//           <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
//             Data Sharing
//           </h2>
//           <p className="text-gray-700 dark:text-gray-300">
//             We do not sell or share your personal information with third parties.
//             Your community data is only visible to members of communities you join.
//           </p>
//         </div>

//         <hr className="my-6 border-gray-200 dark:border-gray-700" />

//         <div>
//           <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
//             Contact
//           </h2>
//           <p className="text-gray-700 dark:text-gray-300">
//             For privacy-related questions, contact us at:{' '}
//             <a href="mailto:privacy@timelink.com" className="text-blue-600 dark:text-blue-400 hover:underline">
//               privacy@timelink.com
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Scenario Two. All rights reserved.
      </div>
    </footer>
  );
};

// --- MAIN APP COMPONENT ---
function App() {
  const [theme, toggleTheme] = useTheme();
  
  // We use React.useState to explicitly reference the global React object
  const [page, setPage] = React.useState({ type: 'home' });

  // --- MODIFICATION HERE ---
  // Sort posts by ID in descending order (newest first)
  // We use [...posts] to create a *copy* before sorting,
  // as .sort() modifies the original array.
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);
  // --- END MODIFICATION ---

  const renderPage = () => {
    switch (page.type) {
      case 'home':
        // Use the new sortedPosts array
        return <HomePage posts={sortedPosts} setPage={setPage} />;
      case 'post':
        // Finding a single post is fine from the original array
        const post = posts.find(p => p.slug === page.slug);
        return <PostPage post={post} />;
      // case 'privacy':
      //   return <PrivacyPolicyPage />;
      default:
        // Use the new sortedPosts array
        return <HomePage posts={sortedPosts} setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <Header setPage={setPage} theme={theme} toggleTheme={toggleTheme} />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}

// --- This is the "start" button for the app ---
// We use the global 'ReactDOM' variable loaded by index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
