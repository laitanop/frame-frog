/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from "frog";
// import { neynar } from 'frog/hubs'
import { handle } from "frog/next";

const app = new Frog({
  assetsPath: "/",
  basePath: "/api",
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
});

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

const renderImage = (selection: any) => {
  let image =
    "url('https://aquamarine-quickest-marmoset-831.mypinata.cloud/ipfs/QmUEKoSqbnEisB5bZ7QS9fiUatYZ7xQXU3LxW7YbhQEj3p')";

  if (selection === 1) {
    image =
      "url('https://aquamarine-quickest-marmoset-831.mypinata.cloud/ipfs/QmUGh9eK62NTfbhA448qvNFpLeFTaqEy9wKHEzrbygD89p')";
  } else if (selection === 2) {
    image =
      "url('https://aquamarine-quickest-marmoset-831.mypinata.cloud/ipfs/QmXdNHTXTY9ECBXK5AbLzPbUZKQtqyrfe253iNAFZUnrsZ')";
  } else if (selection === 3) {
    image =
      "url('https://aquamarine-quickest-marmoset-831.mypinata.cloud/ipfs/QmdMbKZZotnjcVnL6v6GYRUrmEs7n3SUjXPL7mYo1gDwqr')";
  } else if (selection === 4) {
    image =
      "url('https://aquamarine-quickest-marmoset-831.mypinata.cloud/ipfs/QmUEKoSqbnEisB5bZ7QS9fiUatYZ7xQXU3LxW7YbhQEj3p')";
  }
  return image;
};

const renderName = (selection: any) => {
  let text = "";

  if (selection === 1) {
    text = "";
  } else if (selection === 2) {
    text = "";
  } else if (selection === 3) {
    text = "Visit \n  https://frog.fm/ \n to learn more!";
  } else if (selection === 4) {
    text = "";
  }

  return text;
};

app.frame("/", (c) => {
  const { buttonValue, inputText, status, buttonIndex } = c;
  const fruit = inputText || buttonValue;

  return c.res({
    image: (
      <div
        style={{
          color: "black",
          fontWeight: "bold",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "60px",
          paddingTop: "200px",

          backgroundImage: renderImage(buttonIndex),
          objectFit: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
      >
        <a href="https://frog.fm/">{renderName(buttonIndex)}</a>
      </div>
    ),

    intents: [
      <Button value="installation">Installation</Button>,
      <Button value="started">Get started</Button>,
      <Button value="learn">Learn More</Button>,
      status === "response" && <Button.Reset>Reset</Button.Reset>,
    ],
  });
});

export const GET = handle(app);
export const POST = handle(app);
