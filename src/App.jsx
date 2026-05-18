import { useState, useEffect } from "react";

function App() {

  const [length, setLength] = useState(16);

  const [password, setPassword] = useState("");

  const [copied, setCopied] = useState(false);

  const [options, setOptions] = useState({
    upper: true,
    lower: true,
    numbers: true,
    symbols: true,
  });

  useEffect(() => {
    generatePassword();
  }, []);

  const generatePassword = () => {

    let len = parseInt(length);

    if (
      isNaN(len) ||
      len <= 0 ||
      len > 100
    ) {
      len = 8;
    }

    let chars = "";

    if (options.upper)
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (options.lower)
      chars += "abcdefghijklmnopqrstuvwxyz";

    if (options.numbers)
      chars += "0123456789";

    if (options.symbols)
      chars += "!@#$%^&*()_+[]{}<>?";

    if (!chars) {
      chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    }

    let generated = "";

    for (let i = 0; i < len; i++) {

      const random =
        crypto.getRandomValues(
          new Uint32Array(1)
        )[0] % chars.length;

      generated += chars[random];
    }

    setPassword(generated);
  };

  const copyPassword = async () => {

    if (!password) return;

    await navigator.clipboard.writeText(password);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (

    <div className="
      w-[360px]
      min-h-[520px]
      bg-gradient-to-br
      from-slate-100
      to-slate-200
      p-5
      flex
      items-center
      justify-center
    ">

      <div className="
        w-full
        bg-white/70
        backdrop-blur-xl
        rounded-3xl
        shadow-2xl
        border
        border-white/50
        p-6
      ">

        <div className="flex items-center gap-3 mb-6">

          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 1a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V6a5 5 0 00-5-5zm-3 8V6a3 3 0 016 0v3H9z"/>
            </svg>
          </div>

          <div>
            <h1 className="
              text-xl
              font-bold
              text-slate-800
            ">
              Strong Password
            </h1>

            <p className="
              text-sm
              text-slate-500
            ">
              Secure password generator
            </p>
          </div>

        </div>

        <div className="mb-5">

          <div className="flex justify-between items-center mb-2">
            <label className="
              text-sm
              font-medium
              text-slate-600
            ">
              Password Length
            </label>
            <span className="text-blue-600 font-bold">{length}</span>
          </div>

          <input
            type="range"
            min="6"
            max="50"
            value={length}
            onChange={(e) =>
              setLength(e.target.value)
            }
            className="
              w-full
              h-2
              bg-slate-200
              rounded-lg
              appearance-none
              cursor-pointer
              accent-blue-600
            "
          />

        </div>

        <div className="
          space-y-3
          mb-6
        ">

          {[
            ["upper", "Uppercase"],
            ["lower", "Lowercase"],
            ["numbers", "Numbers"],
            ["symbols", "Symbols"],
          ].map(([key, label]) => (

            <label
              key={key}
              className="
                flex
                justify-between
                items-center
                bg-slate-100
                hover:bg-slate-200
                transition
                px-4
                py-3
                rounded-2xl
                cursor-pointer
              "
            >

              <span className="
                text-slate-700
                font-medium
              ">
                {label}
              </span>

              <input
                type="checkbox"
                checked={options[key]}
                onChange={() =>
                  setOptions({
                    ...options,
                    [key]: !options[key],
                  })
                }
                className="
                  w-5
                  h-5
                  accent-blue-500
                "
              />

            </label>
          ))}

        </div>

        <button
          onClick={generatePassword}
          className="
            w-full
            py-3
            rounded-2xl
            bg-blue-600
            hover:bg-blue-700
            active:scale-[0.98]
            transition-all
            text-white
            font-semibold
            shadow-lg
          "
        >
          Generate Password
        </button>

        <div className="
          mt-6
          bg-slate-900
          rounded-2xl
          p-4
        ">

          <div className="
            text-green-400
            font-mono
            break-all
            min-h-[60px]
          ">
            {password || "Your password appears here"}
          </div>

          <button
            onClick={copyPassword}
            className="
              mt-4
              w-full
              py-2
              rounded-xl
              bg-slate-700
              hover:bg-slate-600
              transition
              text-white
              font-medium
            "
          >
            {copied
              ? "Copied!"
              : "Copy Password"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;