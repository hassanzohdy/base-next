import {
  Button,
  Container,
  Group,
  List,
  rem,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { endpoint } from "app/shared/endpoint";
import Link from "next/link";
import { useStyles } from "./home.styles";

export default function HomePage({ data }: any) {
  const { classes } = useStyles();

  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>modern</span> React <br />{" "}
              components library
            </Title>
            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>TypeScript based</b> – build type safe applications, all
                components and hooks export types
              </List.Item>
              <List.Item>
                <b>Free and open source</b> – all packages have MIT license, you
                can use Mantine in any project
              </List.Item>
              <List.Item>
                <b>No annoying focus ring</b> – focus ring will appear only when
                user navigates with keyboard
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                component={Link}
                href="/"
                locale="en"
                onClick={() => window.location.reload()}
                className={classes.control}
              >
                EN
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                component={Link}
                href="/"
                locale="ar"
                onClick={() => window.location.reload()}
                className={classes.control}
              >
                AR
              </Button>
              <Button
                component={Link}
                variant="default"
                radius="xl"
                size="md"
                href="/login"
              >
                Source code
              </Button>
            </Group>
          </div>
        </div>
      </Container>
    </div>
  );
}

export const getServerSideProps = async (ctx: any) => {
  // get fake data from api

  const response = await endpoint.get("/todos/1");

  return {
    props: {
      data: response.data,
    },
  };
};
