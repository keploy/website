import React from "react";
import Container from "@/components/webstories/container";
import StoriesCards from "@/components/webstories/StoriesCards";
import bunny from "@/public/images/community-bunny.png";

const page = () => {
  const dummyData = [
    {
      Image: bunny,
      CardDescription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ad autem fugiat ipsam eligendi repudiandae sed dolore est, laudantium esse quae veritatis excepturi amet deserunt nisi sapiente non? Veniam, quae!",
      Slug: "/web-Storie-1",
    },
    {
      Image: bunny,
      CardDescription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ad autem fugiat ipsam eligendi repudiandae sed dolore est, laudantium esse quae veritatis excepturi amet deserunt nisi sapiente non? Veniam, quae!",
      Slug: "/web-Storie-2",
    },
    {
      Image: bunny,
      CardDescription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ad autem fugiat ipsam eligendi repudiandae sed dolore est, laudantium esse quae veritatis excepturi amet deserunt nisi sapiente non? Veniam, quae!",
      Slug: "/web-Storie-3",
    },
    {
      Image: bunny,
      CardDescription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ad autem fugiat ipsam eligendi repudiandae sed dolore est, laudantium esse quae veritatis excepturi amet deserunt nisi sapiente non? Veniam, quae!",
      Slug: "/web-Storie-4",
    },
  ];

  return (
    <>
      <Container>
        <StoriesCards data={dummyData} />
      </Container>
    </>
  );
};

export default page;
