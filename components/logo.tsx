"use client";

export function Logo() {
  return (
    <div className="pl-4 pt-2">
      <img 
        src="/images/logo.png"
        alt="OA Virtual Healthcare Logo"
        width={180}
        height={40}
        className="object-contain"
      />
    </div>
  );
}