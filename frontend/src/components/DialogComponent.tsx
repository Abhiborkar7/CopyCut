import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export default function DialogComponent() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleOnClick = () => {
    console.log("OTP:", otp);
    navigate(`/view/${otp}`);
    
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button>Enter Key</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter key of a Copycut</DialogTitle>
        </DialogHeader>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="number"
            placeholder="Key"
            value={otp}
            onChange={handleChange}
          />
          <Button type="submit" onClick={handleOnClick}>
            Open
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
