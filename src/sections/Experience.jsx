import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { experiencesData } from '../../data'
import { useTheme } from '../context/ThemeContex';
import "react-vertical-timeline-component/style.min.css";


function Experience() {
    const { darkMode } = useTheme();
    return (
        <section className='py-48' id='experiences'>
            <h2 className="sub-title dark:sub-title-dark text-center mb-8">
                Experiences
            </h2>
            <VerticalTimeline lineColor={darkMode ? "rgba(156, 163, 175, 1)" : "rgba(209, 213, 219, 0.5)"}>
                {experiencesData.map((data, index) => {
                    return <VerticalTimelineElement
                        key={index}
                        date={data.date}
                        icon={<data.icon />}
                        iconStyle={{
                            background: darkMode ? "rgba(55, 65, 81, 1)" : "rgba(243, 244, 246, 1)",
                            color: darkMode ? "rgba(243, 244, 246, 1)" : "rgba(55, 65, 81, 0.8)",
                            boxShadow: 'none',
                            outline: darkMode ? "4px solid rgba(156, 163, 175, 1)" : "4px solid rgba(209, 213, 219, 0.5)"
                        }}
                        contentStyle={{
                            background:
                                darkMode ? "rgba(255, 255, 255, 0.05)" : "#f3f4f6",

                            border: darkMode
                                ? "1px solid rgba(255, 255, 255, 0.05)"
                                : "1px solid rgba(0, 0, 0, 0.05)",
                            textAlign: "left",
                            padding: "1.3rem 2rem",
                            boxShadow: "none"
                        }}
                        contentArrowStyle={{
                            borderRight:
                                darkMode
                                    ? "0.4rem solid rgba(255, 255, 255, 0.3)"
                                    : "0.4rem solid rgba(0, 0, 0, 0.1)",
                        }}


                    >
                        <h3 className="font-semibold capitalize">{data.title}</h3>
                        <p className="font-normal">{data.company}</p>
                        <p className="font-normal text-gray-700 dark:text-white/75">
                            {data.description}
                        </p>
                    </VerticalTimelineElement>
                })}

            </VerticalTimeline>

        </section >
    )
}

export default Experience