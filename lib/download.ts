import fs from "fs";
import path from "path";
import { PRODUCT } from "./product";

export function getProductZipPath(): string {
  return path.join(process.cwd(), "private", "downloads", PRODUCT.fileName);
}

export function productZipExists(): boolean {
  return fs.existsSync(getProductZipPath());
}