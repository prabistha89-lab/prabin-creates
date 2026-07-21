import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const required = ["app/page.tsx", "app/about/page.tsx", "app/services/page.tsx", "app/services/[slug]/page.tsx", "app/blog/page.tsx", "app/blog/[slug]/page.tsx", "app/contact/page.tsx", "app/api/contact/route.ts", "app/sitemap.ts", "app/robots.ts", ".env.example"];

test("required routes and production files exist", () => {
  for (const file of required) assert.equal(existsSync(file), true, `${file} should exist`);
});

test("personal portrait is wired into the home page", () => {
  assert.equal(existsSync("public/images/profile/prabin-shrestha.png"), true);
  assert.match(readFileSync("app/page.tsx", "utf8"), /prabin-shrestha\.png/);
});

test("consultation links use the canonical query parameter", () => {
  const files = ["components/Header.tsx", "components/CTASection.tsx"];
  for (const file of files) assert.match(readFileSync(file, "utf8"), /\/contact\?service=consultation/);
});
