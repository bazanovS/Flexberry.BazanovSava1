docker build --no-cache -f SQL\Dockerfile.PostgreSql -t bazanovsava1/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t bazanovsava1/app ../..
