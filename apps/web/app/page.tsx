import { Button } from "@repo/ui/button";
import {InputBox} from "@repo/ui/input-box";
export default function Page(): JSX.Element {
  return (
    <div>
      <Button appName="web app">hi there !</Button>
      <InputBox />
    </div>
  );
}
