ARG AWS_CLI_VERSION

FROM amazon/aws-cli:${AWS_CLI_VERSION} as development

ARG TERRAFORM_VERSION

WORKDIR /usr/terraform

RUN yum install unzip -y

RUN curl https://releases.hashicorp.com/terraform/${TERRAFORM_VERSION}/terraform_${TERRAFORM_VERSION}_linux_amd64.zip -o terraform_${TERRAFORM_VERSION}_linux_amd64.zip &&\
    unzip terraform_${TERRAFORM_VERSION}_linux_amd64.zip && rm terraform_${TERRAFORM_VERSION}_linux_amd64.zip &&\
    mv terraform /usr/bin/terraform

ENTRYPOINT [ "/bin/bash" ]
