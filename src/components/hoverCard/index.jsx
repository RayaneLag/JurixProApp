import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import "./styles.css";
import { Link, Navigate, Route, Routes } from "react-router-dom";

const HoverCardDemo = ({ title, navchild }) => (
  <HoverCard.Root openDelay={100}>
    <HoverCard.Trigger asChild>
      <div className="ImageTrigger">{title}</div>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content className="HoverCardContent" sideOffset={5}>
        {navchild?.map((e) => (
          <Link className="mylink" to={e.href}>{e.title}</Link>
        ))}

        <HoverCard.Arrow className="HoverCardArrow" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default HoverCardDemo;
