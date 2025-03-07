import { Tabs } from "./Tabs";

export const TabsPage = () => {
  const tabs = [
    {
      title: "Account",
      content: "Account Information",
    },
    {
      title: "Personal",
      content: "Personal Information",
    },
    {
      title: "Diversity",
      content: "Diversity Information",
    },
    {
      title: "Professional",
      content: "Professional Information",
    },
  ];

  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
};
