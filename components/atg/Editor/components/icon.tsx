import Image from "next/image";
import React, { ReactNode } from "react";
import folderSrc from "../../asset/icons/folder-src.svg"; // Import SVG as a file
import folderSrcOpen from "../../asset/icons/folder-src-open.svg";
import Javascript from "../../asset/icons/javascript.svg";
import TypeScript from "../../asset/icons/typescript.svg";
import JSX from "../../asset/icons/react.svg";
import TSX from "../../asset/icons/react_ts.svg";
import CSS from "../../asset/icons/css.svg";
import Golang from "../../asset/icons/go.svg";
import JSON from "../../asset/icons/json.svg";
import HTML from "../../asset/icons/html.svg";
import IMAGE from "../../asset/icons/image.svg";
import FAVICON from "../../asset/icons/favicon.svg";
import YAML from "../../asset/icons/yaml.svg";
import TEXT from "../../asset/icons/file-text-outline.svg";
import PYTHON from "../../asset/icons/python.svg";
import TEXT_DARK from "../../asset/icons/document.svg"
function getIconHelper() {
  const cache = new Map<string, ReactNode>();
  cache.set(
    "js",
    <Image src={Javascript} alt="folder" width={24} height={24} />
  );
  cache.set("jsx", <Image src={JSX} alt="folder" width={24} height={24} />);
  cache.set(
    "ts",
    <Image src={TypeScript} alt="folder" width={24} height={24} />
  );
  cache.set("tsx", <Image src={TSX} alt="folder" width={24} height={24} />);
  cache.set("css", <Image src={CSS} alt="folder" width={24} height={24} />);
  cache.set("go", <Image src={Golang} alt="folder" width={24} height={24} />);
  cache.set("json", <Image src={JSON} alt="folder" width={24} height={24} />);
  cache.set("html", <Image src={HTML} alt="folder" width={24} height={24} />);
  cache.set("png", <Image src={IMAGE} alt="folder" width={24} height={24} />);
  cache.set("jpg", <Image src={IMAGE} alt="folder" width={24} height={24} />);
  cache.set("ico", <Image src={FAVICON} alt="folder" width={24} height={24} />);
  cache.set("yaml", <Image src={YAML} alt="folder" width={24} height={24} />);
  cache.set("py", <Image src={PYTHON} alt="folder" width={24} height={24} />);
  cache.set(
    "closedDirectory",
    <Image src={folderSrc} alt="folder" width={24} height={24} />
  );
  cache.set(
    "openDirectory",
    <Image src={folderSrcOpen} alt="folder" width={24} height={24} />
  );

  return function (
    extension: string,
    name: string,
    IconsTheme: boolean
  ): ReactNode {
    if (cache.has(extension)) return cache.get(extension);
    else if (cache.has(name)) return cache.get(name);
    else return  <Image src={IconsTheme ? TEXT:TEXT_DARK} alt="folder" width={24} height={24} className="text-white" />
  };
}

export const getIcon = getIconHelper();
