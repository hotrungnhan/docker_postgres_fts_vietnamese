ARG POSTGRES_VERSION
ARG FTS_VERSION
FROM postgres:${POSTGRES_VERSION}
ENV SHAREDIR="/usr/local/share/postgresql"
COPY dist/* ${SHAREDIR}/tsearch_data/