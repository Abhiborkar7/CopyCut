import "./App.css";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import SubmitButton from "./components/SubmitButton";
import { Textarea } from "@/components/ui/textarea";
import { useText } from "./TextContext";
import { useCallback } from "react";
import DialogComponent from "./components/DialogComponent";

export default function App() {
  const { text, setText } = useText();
  const handleTextChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value); // Efficiently updates text
    },
    [setText]
  );

  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-screen w-full rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={8}>
        <div className="flex h-full items-center p-6 relative">
          <span className="font-semibold  lg:text-2xl md:mr-0">CopyCut</span>
          <p className="text-white sm:text-black md:block lg:text-xl mr-[100px] md:mr-0">
            {" "}
            - Instantly share your code, article, or any text with your friends.
          </p>
          <div className="absolute right-8 top-2">
            <DialogComponent />
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={100}>
        <div className="flex h-full items-center justify-center flex-col gap-6 p-6">
          <div className="grid w-full gap-1.5 flex-1">
            {/* <Label htmlFor="message">Your message</Label> */}
            <Textarea
              className=""
              placeholder="Type your message here."
              value={text}
              onChange={handleTextChange}
              id="message"
            />
          </div>
          <div className="flex justify-between">
            <SubmitButton textButton="Send"></SubmitButton>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
