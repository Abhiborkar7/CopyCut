import { CopyIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Spinner } from "./ui/Spinner";
import { useText } from "@/TextContext";
import axios from "axios";

export default function SubmitButton({ textButton }: any) {
  const [textCode, setTextCode] = useState(null);
  const { text } = useText();
  const fullUrl = window.location.host;

  const handleClick = async () => {
    try {
      const response = await axios.post("/api/submit", {
        text,
      });
      console.log("Response from backend:", response.data);
      setTextCode(response.data.textCode);
    } catch (error) {
      console.error("Error sending text:", error);
    }
  };

  const copyToClipboard = async () => {
    try {
      if (textCode) {
        await navigator.clipboard.writeText(`${fullUrl}/view/${textCode}`);
      }
    } catch (error) {
      console.error("Failed to copy text: ", error);
      alert("Failed to copy link.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="w-40 h-12 bg-zinc-800		">
        <Button
          onClick={handleClick}
          variant="outline"
          className="text-neutral-100"
        >
          {textButton}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Key</DialogTitle>
          <DialogDescription>
            Anyone who has this key will be able to view this.
          </DialogDescription>
        </DialogHeader>
        {textCode ? (
          <>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <h2>{`${textCode}`}</h2>
              </div>
              <Button
                onClick={copyToClipboard}
                type="submit"
                size="sm"
                className="px-3"
              >
                <span className="sr-only">Copy</span>
                <CopyIcon className="h-4 w-4" />
              </Button>
            </div>
          </>
        ) : (
          <Spinner />
        )}

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
