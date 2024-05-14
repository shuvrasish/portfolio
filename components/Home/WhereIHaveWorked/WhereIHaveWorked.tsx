import React, { useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import GenericExperience from "./Descriptions/GenericExperience";
import { experienceData } from "./Descriptions/data";

const WhereIHaveWorked = () => {
  const GetDescription = () => (
    <GenericExperience
      title={experienceData[DescriptionJob].title}
      company={experienceData[DescriptionJob].company}
      date={experienceData[DescriptionJob].date}
      websiteLink={experienceData[DescriptionJob].websiteLink}
      tasks={experienceData[DescriptionJob].tasks}
    />
  );

  const [DescriptionJob, setDescriptionJob] = useState("Anchanto");
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary"
    >
      {/* // ? Title "Where I've Worked" */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon
            className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"}
          />
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            02.
          </span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      {/* // ? Where I've Worked Content section */}
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start "
      >
        {/* // ? Left side of Where I've Worked, contains the bar and name of companies */}
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {/* // ? Description for The job */}
        {GetDescription()}
      </section>
    </div>
  );
};

const CompaniesBar = (props) => {
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] =
    useState<boolean[]>([true, false, false, false, false, false, false]);

  const CompanyButton = (props) => {
    return (
      <button
        onClick={() => {
          props.setDescriptionJob(props.DescriptionJob);
          setCompanyNameBackgroundColorGreen(
            props.CompanyNameBackgroundColorGreen
          );
        }}
        className={`flex-none sm:text-sm text-xs text-center md:text-left  hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded  font-mono  
             py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
             ${
               companyNameBackgroundColorGreen[
                 props.ButtonOrderOfcompanyNameBackgroundColorGreen
               ]
                 ? "bg-ResumeButtonHover text-AAsecondary"
                 : "text-gray-500"
             }`}
      >
        {props.CompanyName}
      </button>
    );
  };

  const companyData = [
    {
      CompanyName: "Anchanto",
      DescriptionJob: "Anchanto",
    },
    {
      CompanyName: "Janoo App",
      DescriptionJob: "Janoo",
    },
    {
      CompanyName: "Securaeon",
      DescriptionJob: "Securaeon",
    },
  ];

  const generateBackgroundArray = (currentIndex, totalCompanies) => {
    const backgroundArray = new Array(totalCompanies).fill(false);
    backgroundArray[currentIndex] = true;
    return backgroundArray;
  };

  return (
    <div
      id="WhereIhaveWorkedSection"
      className=" flex flex-col md:flex-row  w-screen lg:w-auto 
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-center items-start sm:items-center"
    >
      {/* // ? Companies name as buttons */}
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0 ">
        <div className="flex flex-row md:flex-col">
          {companyData.map((company, index) => {
            const CompanyNameBackgroundColorGreen = generateBackgroundArray(
              index,
              companyData.length
            );

            return (
              <CompanyButton
                key={index}
                ButtonOrderOfcompanyNameBackgroundColorGreen={index}
                CompanyName={company.CompanyName}
                DescriptionJob={company.DescriptionJob}
                CompanyNameBackgroundColorGreen={
                  CompanyNameBackgroundColorGreen
                }
                setDescriptionJob={props.setDescriptionJob}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhereIHaveWorked;
