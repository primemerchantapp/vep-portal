import { Avatar, Button, Flex, Heading, Icon, IconButton, SmartImage, Tag, Text } from '@/once-ui/components';
import { baseURL } from '@/app/resources';
import TableOfContents from '@/components/about/TableOfContents';
import styles from '@/components/about/about.module.scss';
import { person, about, social } from '@/app/resources/content';

export async function generateMetadata() {
    const title = 'About VEP - Virtual Employee Portal';
    const description = 'Learn more about VEP, the Virtual Employee Portal, and how it revolutionizes remote work.';
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/about`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function About() {
    const structure = [
        {
            title: about.intro.title,
            display: about.intro.display,
            items: []
        },
        {
            title: 'VEP Features',
            display: true,
            items: ['Remote Collaboration', 'Task Management', 'Employee Engagement']
        },
        {
            title: 'Our Team',
            display: true,
            items: ['Leadership', 'Developers', 'Support']
        },
        {
            title: 'Technical Stack',
            display: true,
            items: ['Frontend', 'Backend', 'DevOps']
        },
    ];

    return (
        <Flex
            maxWidth="m"
            direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'VEP - Virtual Employee Portal',
                        description: 'Revolutionizing remote work with seamless collaboration and productivity tools.',
                        url: `https://${baseURL}/about`,
                        image: `${baseURL}/images/vep-logo.png`,
                        sameAs: social
                            .filter((item) => item.link && !item.link.startsWith('mailto:'))
                            .map((item) => item.link),
                    }),
                }}
            />
            {about.tableOfContent.display && (
                <Flex
                    style={{ left: '0', top: '50%', transform: 'translateY(-50%)' }}
                    position="fixed"
                    paddingLeft="24" gap="32"
                    direction="column" hide="s">
                    <TableOfContents
                        structure={structure}
                        about={about} />
                </Flex>
            )}
            <Flex
                fillWidth
                mobileDirection="column" justifyContent="center">
                {about.avatar.display && (
                    <Flex
                        className={styles.avatar}
                        minWidth="160" paddingX="l" paddingBottom="xl" gap="m"
                        flex={3} direction="column" alignItems="center">
                        <Avatar
                            src="/images/vep-logo.png"
                            size="xl" />
                        <Flex
                            gap="8"
                            alignItems="center">
                            <Icon
                                onBackground="accent-weak"
                                name="globe" />
                            Global Remote Team
                        </Flex>
                        <Flex
                            wrap
                            gap="8">
                            <Tag size="l">Remote Work</Tag>
                            <Tag size="l">Productivity</Tag>
                            <Tag size="l">Collaboration</Tag>
                        </Flex>
                    </Flex>
                )}
                <Flex
                    className={styles.blockAlign}
                    flex={9} maxWidth={40} direction="column">
                    <Flex
                        id={about.intro.title}
                        fillWidth minHeight="160"
                        direction="column" justifyContent="center"
                        marginBottom="32">
                        {about.calendar.display && (
                            <Flex
                                fitWidth
                                border="brand-alpha-medium"
                                className={styles.blockAlign}
                                style={{
                                    backdropFilter: 'blur(var(--static-space-1))',
                                }}
                                background="brand-alpha-weak" radius="full"
                                padding="4" gap="8" marginBottom="m"
                                alignItems="center">
                                <Flex paddingLeft="12">
                                    <Icon
                                        name="calendar"
                                        onBackground="brand-weak" />
                                </Flex>
                                <Flex
                                    paddingX="8">
                                    Schedule a Demo
                                </Flex>
                                <IconButton
                                    href={about.calendar.link}
                                    data-border="rounded"
                                    variant="secondary"
                                    icon="chevronRight" />
                            </Flex>
                        )}
                        <Heading
                            className={styles.textAlign}
                            variant="display-strong-xl">
                            VEP - Virtual Employee Portal
                        </Heading>
                        <Text
                            className={styles.textAlign}
                            variant="display-default-xs"
                            onBackground="neutral-weak">
                            Empowering Remote Teams
                        </Text>
                        {social.length > 0 && (
                            <Flex
                                className={styles.blockAlign}
                                paddingTop="20" paddingBottom="8" gap="8" wrap>
                                {social.map((item) => (
                                    item.link && (
                                        <Button
                                            key={item.name}
                                            href={item.link}
                                            prefixIcon={item.icon}
                                            label={item.name}
                                            size="s"
                                            variant="secondary" />
                                    )
                                ))}
                            </Flex>
                        )}
                    </Flex>

                    {about.intro.display && (
                        <Flex
                            direction="column"
                            textVariant="body-default-l"
                            fillWidth gap="m" marginBottom="xl">
                            VEP is a cutting-edge platform designed to streamline remote work, enhance collaboration, and boost productivity. Our mission is to provide a seamless experience for virtual teams worldwide.
                        </Flex>
                    )}

                    <Heading
                        as="h2"
                        id="VEP Features"
                        variant="display-strong-s"
                        marginBottom="m">
                        VEP Features
                    </Heading>
                    <Flex
                        direction="column"
                        fillWidth gap="l" marginBottom="40">
                        {[
                            { title: 'Remote Collaboration', description: 'Real-time communication and collaboration tools.' },
                            { title: 'Task Management', description: 'Efficient task tracking and project management.' },
                            { title: 'Employee Engagement', description: 'Tools to keep your team motivated and connected.' },
                        ].map((feature, index) => (
                            <Flex
                                key={index}
                                fillWidth gap="4"
                                direction="column">
                                <Text
                                    variant="heading-strong-l">
                                    {feature.title}
                                </Text>
                                <Text
                                    variant="body-default-m"
                                    onBackground="neutral-weak">
                                    {feature.description}
                                </Text>
                            </Flex>
                        ))}
                    </Flex>

                    <Heading
                        as="h2"
                        id="Our Team"
                        variant="display-strong-s"
                        marginBottom="m">
                        Our Team
                    </Heading>
                    <Flex
                        direction="column"
                        fillWidth gap="l" marginBottom="40">
                        {[
                            { title: 'Leadership', description: 'Experienced leaders driving innovation.' },
                            { title: 'Developers', description: 'Talented developers building the future.' },
                            { title: 'Support', description: 'Dedicated support team ensuring smooth operations.' },
                        ].map((team, index) => (
                            <Flex
                                key={index}
                                fillWidth gap="4"
                                direction="column">
                                <Text
                                    variant="heading-strong-l">
                                    {team.title}
                                </Text>
                                <Text
                                    variant="body-default-m"
                                    onBackground="neutral-weak">
                                    {team.description}
                                </Text>
                            </Flex>
                        ))}
                    </Flex>

                    <Heading
                        as="h2"
                        id="Technical Stack"
                        variant="display-strong-s"
                        marginBottom="m">
                        Technical Stack
                    </Heading>
                    <Flex
                        direction="column"
                        fillWidth gap="l">
                        {[
                            { title: 'Frontend', description: 'React, Tailwind CSS, and TypeScript.' },
                            { title: 'Backend', description: 'Node.js, FastAPI, and PostgreSQL.' },
                            { title: 'DevOps', description: 'Docker, Kubernetes, and AWS.' },
                        ].map((tech, index) => (
                            <Flex
                                key={index}
                                fillWidth gap="4"
                                direction="column">
                                <Text
                                    variant="heading-strong-l">
                                    {tech.title}
                                </Text>
                                <Text
                                    variant="body-default-m"
                                    onBackground="neutral-weak">
                                    {tech.description}
                                </Text>
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
		    }
