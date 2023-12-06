import { AiOutlineStar } from "react-icons/ai"
import { AiOutlineLink } from "react-icons/ai"
import { getRepo } from "@/lib/api/github"
import { Badge } from "@/components/ui/badge"
import { getTextColor } from "@/lib/get-text-color"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Repo } from "@/types/api"


interface GitHubRepoProps {
  repoData: Repo[]
}

export default async function GitHubRepo({repoData}: GitHubRepoProps) {

  return (
    <>
      {repoData.map((project, index) => (
        <Card
          key={index}
          className="dark:hover:bg-gray-600 dark:hover:bg-opacity-20"
        >
          <CardHeader>
            <div className="flex justify-between">
              <a
                target="_blank"
                href={project.link}
                rel="noopener noreferrer"
                aria-label={project.description}
              >
                <CardTitle className="text-lg hover:underline">
                  {project.repo}
                </CardTitle>
              </a>
              <a
                target="_blank"
                href={project.link}
                rel="noopener noreferrer"
                aria-label="Visit the project's live url/repo"
              >
                <AiOutlineLink />
              </a>
            </div>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Badge
              style={{
                backgroundColor: `${project.languageColor}`,
                color: "black",
                // color: `${getTextColor(project.languageColor)}`,
              }}
            >
              {project.language}
            </Badge>
            <CardDescription className="flex gap-1">
              <AiOutlineStar className="text-lg" />
              {project.stars}
            </CardDescription>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}
