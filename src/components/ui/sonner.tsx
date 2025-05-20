"use client"

import { useTheme } from "next-themes"
import { toast, Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

type BaseToastProps = Parameters<typeof toast>[1] // options argument is second

type ActionToastProps = Omit<BaseToastProps, "variant"> & {
  actionData: { error: boolean; message: string }
}

function actionToast({ actionData, ...props }: ActionToastProps) {
  const isError = actionData.error;

  return toast(
    () => (
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "0.5rem 1rem",
          borderRadius: 6,
          color: "white",
          backgroundColor: isError ? "#DF1D1D" : "#6EBE2F", // slightly darker red and green
          border: "none",
          boxSizing: "border-box",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <strong>{isError ? "Error" : "Success"}</strong>
        <div style={{ fontSize: "1rem" }}>{actionData.message}</div>
      </div>
    ),
    {
      ...props,
    }
  );
}

export { Toaster, actionToast }
