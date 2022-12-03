FROM postgres:14-alpine
ENV FTS_VERSION=${FTS_VERSION}
ENV SHAREDIR="/usr/local/share/postgresql"
COPY dist/* ${SHAREDIR}/tsearch_data/