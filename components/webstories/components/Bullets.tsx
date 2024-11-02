export interface BulletsProps {
  lists: bulletsType;
}
export type bulletsType = string[];

export const Bullets = ({ lists }: BulletsProps) => {
  return (
    <>
      {lists &&
        lists.map((list: any) => {
          return (
            <li className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-emerald-600 h-6 w-5 flex-none"
                aria-hidden="true"
              >
                <path
                  d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                  fill="currentColor"
                  stroke-width="0"
                ></path>
              </svg>
              {list}
              <div></div>
            </li>
          );
        })}
    </>
  );
};
