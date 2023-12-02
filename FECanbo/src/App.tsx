import { Button } from "antd";
import { DemoComponent } from "@admanager/frontend";
import { useEffect } from "react";
import EditSetpoint from "./components/EditSetpoint";
import EditAdForm from "./components/EditAdForm";
function App() {
  return (
    <div>
      {/* <div className="flex place-items-center bg-slate-500">HelloCanBo</div>
      <Button type="primary">Button</Button>
      <DemoComponent /> */}
      <EditSetpoint />
      {/* <EditAdForm /> */}
    </div>
  );
}

export default function () {
  useEffect(() => {
    const head = document.querySelector("head");
    if (!head) {
      return;
    }
    const tailWindStyleTag = [...head.querySelectorAll("style")].find((style) =>
      style.innerHTML.includes("tailwind"),
    );
    if (tailWindStyleTag) {
      head.insertAdjacentElement("afterbegin", tailWindStyleTag);
    }
  }, []);
  return <App />;
}
