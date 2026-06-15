"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";

const transitionFunctions = {
  topToBottom: () => {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0, transform: "translateY(35%)" },
      ],
      {
        duration: 900,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      },
    );
    document.documentElement.animate(
      [
        { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
      ],
      {
        duration: 900,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  },
  leftToRight: () => {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "translateX(0)" },
        { opacity: 0, transform: "translateX(35%)" },
      ],
      {
        duration: 900,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      },
    );
    document.documentElement.animate(
      [
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
      ],
      {
        duration: 900,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  },
  rightToLeft: () => {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "translateX(0)" },
        { opacity: 0, transform: "translateX(-35%)" },
      ],
      {
        duration: 900,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      },
    );
    document.documentElement.animate(
      [
        { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" },
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
      ],
      {
        duration: 900,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  },
  bottomToTop: () => {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0, transform: "translateY(-35%)" },
      ],
      {
        duration: 900,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      },
    );
    document.documentElement.animate(
      [
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
      ],
      {
        duration: 900,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  },
};

type TransitionType = keyof typeof transitionFunctions;

interface NavLinkProps {
  href: string;
  transitionType: TransitionType;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({
  href,
  transitionType,
  children,
  className = "",
}: NavLinkProps) {
  const router = useTransitionRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    router.push(href, {
      onTransitionReady: () => transitionFunctions[transitionType](),
    });
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
