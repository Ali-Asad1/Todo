import Typewriter, { TypewriterClass, Options } from "typewriter-effect";

const typewriterOptions: Options = {
  loop: true,
  delay: 100,
  deleteSpeed: 200,
};

const onInitHandler = (typewriter: TypewriterClass) => {
  typewriter
    .typeString("Developed by Ali")
    .pauseFor(3000)
    .deleteAll()
    .typeString(
      `Check My  <a href="https://github.com/MrAli001" target="_blank" class="font-bold text-pink-8 underline underline-offset-2">Github Profile</a>`
    )
    .pauseFor(2500)
    .deleteChars(15)
    .typeString(
      `<a href="https://www.linkedin.com/in/ali-asad-a77290232" target="_blank" class="font-bold text-[#0077B5] underline underline-offset-2">Linkedin Profile</a>`
    )
    .pauseFor(2500)
    .start();
};

export default function Footer() {
  return (
    <footer className="bg-pink-4 sticky bottom-0 z-20 transition-colors">
      <div className="h-12 flex justify-center items-center">
        <Typewriter options={typewriterOptions} onInit={onInitHandler} />
      </div>
    </footer>
  );
}
