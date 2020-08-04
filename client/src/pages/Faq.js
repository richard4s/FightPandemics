import React from "react";
import { Trans, useTranslation } from "react-i18next";

import {
  FaqContainer,
  QuestionsContainer,
  AnswerContainer,
} from "components/Faq/FaqContainer";

import { TermsLink as FaqLink } from "components/PolicyPages/TermsLink";

const Faq = () => {
  const { t } = useTranslation();
  return (
    <FaqContainer>
      <QuestionsContainer>
        <h1 className="text-primary display-6">Frequently Asked Questions</h1>

        <h2 className="text-primary display-5">
          {t("faq.title")}
        </h2>
        <AnswerContainer>
          <details>
            <summary>{t("faq.general.0.0")}</summary>
            <p>
              {t("faq.general.0.1")}
            </p>
            <p>
              {t("faq.general.0.2")}
              <FaqLink href="https://fightpandemics.com/feed" target="_blank">
                https://fightpandemics.com/feed
              </FaqLink>
            </p>
            <p>
              {t("faq.general.0.3")}
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>{t("faq.general.1.0")}</summary>
            <p>
              {t("faq.general.1.1")}
            </p>
            <p>
              <Trans i18nKey="faq.general.1.2" components={[<FaqLink href="mailto:hr@fightpandemics.com" target="_blank"/>]}>
              </Trans>
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>{t("faq.general.2.0")}</summary>
            <p>
              {t("faq.general.2.1")}
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>{t("faq.general.3.0")}</summary>
            <p>
              {t("faq.general.3.1")}
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>
              {t("faq.general.4.0")}
            </summary>
            <Trans i18nKey="faq.general.4.1" components={[<p/>, <p/>, <p/>]}></Trans>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>
              {t("faq.general.5.0")}
            </summary>
            <p>
              <Trans i18nKey="faq.general.5.1" components={[
                <FaqLink href="https://www.facebook.com/FightPandemics/" target="_blank"/>,
                <FaqLink href="https://twitter.com/fightpandemics?lang=en" target="_blank"/>,
                <FaqLink href="https://www.linkedin.com/company/fightpandemics/" target="_blank"/>,
                <FaqLink href="https://www.instagram.com/fightpandemics/" target="_blank"/>
              ]}>
              </Trans>
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>{t("faq.general.6.0")}</summary>
            <p>
              {t("faq.general.6.1")}
            </p>
          </details>
        </AnswerContainer>
          <h2 className="text-primary display-5">{t("faq.offerRequestHelp")}</h2>
        <AnswerContainer>
          <details>
            <summary>
              {t("faq.general.7.0")}
            </summary>
            <p>
              {t("faq.general.7.1")}
            </p>
            <ul>
              <Trans i18nKey="faq.general.7.2" components={[<li/>,<li/>,<li/>,<li/>,<li/>,<li/>,<li/>,<li/>,<li/>,<li/>]}></Trans>
            </ul>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>{t("faq.general.8.0")}</summary>
            <p>
              {t("faq.general.8.1")}
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>{t("faq.general.9.0")}</summary>
            <Trans i18nKey="faq.general.9.1" components={[<p/>, <p/>]}></Trans>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>
              {t("faq.general.10.0")}
            </summary>
            <p>
              {t("faq.general.10.1")}
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>{t("faq.general.11.0")}</summary>
            <p>
              {t("faq.general.11.1")}
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>
              {t("faq.general.12.0")}
            </summary>
            <p>
              {t("faq.general.12.1")}
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>
              {t("faq.general.13.0")}
            </summary>
            <p>
              {t("faq.general.13.1")}
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>{t("faq.general.14.0")}</summary>
            <p>
              <Trans i18nKey="faq.general.14.1" components={[<FaqLink href="mailto:support@fightpandemics.com" target="_blank"/>]}></Trans>
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>{t("faq.general.15.0")}</summary>
            <p>{t("faq.general.15.1")}</p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>
              {t("faq.general.16.0")}
            </summary>
            <p>
              {t("faq.general.16.1")}
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>{t("faq.general.17.0")}</summary>
            <p>
              {t("faq.general.17.1")}
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>
              {t("faq.general.18.0")}
            </summary>
            <p>
              <Trans i18nKey="faq.general.18.1" components={[<FaqLink href="mailto:support@fightpandemics.com" target="_blank"/>]}></Trans>
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>
              {t("faq.general.19.0")}
            </summary>
            <p>
              <Trans i18nKey="faq.general.19.1" components={[<FaqLink href="mailto:support@fightpandemics.com" target="_blank"/>]}></Trans>
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>{t("faq.general.20.0")}</summary>
            <p>
              <Trans i18nKey="faq.general.20.1" components={[<FaqLink href="https://fightpandemics.com/privacy-policy" />]}></Trans>
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>
              {t("faq.general.21.0")}
            </summary>
            <p>
              {t("faq.general.21.1")}
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>
              {t("faq.general.22.0")}
            </summary>
            <p>
              <Trans i18nKey="faq.general.22.1" components={[<FaqLink href="mailto:contact@fightpandemics.com" target="_blank"/>]}></Trans>
            </p>
          </details>
        </AnswerContainer>

          <h2 className="text-primary display-5">{t("faq.profileAccount")}</h2>

        <AnswerContainer>
          <details>
            <summary>{t("faq.accountFAQ.0.0")}</summary>
            <Trans i18nKey="faq.accountFAQ.0.1" components={[<p/>, <p/>]}></Trans>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>
              {t("faq.accountFAQ.1.0")}
            </summary>
            <p>
              {t("faq.accountFAQ.1.1")}
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>
              {t("faq.accountFAQ.2.0")}
            </summary>
            <p>
              {t("faq.accountFAQ.2.1")}
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>{t("faq.accountFAQ.3.0")}</summary>
            <p>
              {t("faq.accountFAQ.3.1")}
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>{t("faq.accountFAQ.4.0")}</summary>
            <p>
              {t("faq.accountFAQ.4.1")}
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>
              {t("faq.accountFAQ.5.0")}
            </summary>
            <p>
              {t("faq.accountFAQ.5.1")}
              <ol>
                <li>{t("faq.accountFAQ.5.2")}</li>
                <li>{t("faq.accountFAQ.5.3")}</li>
                <li>
                  <Trans i18nKey="faq.accountFAQ.5.4" components={[<FaqLink
                    href="mailto:support@fightpandemics.com"
                    target="_blank"
                  />]}></Trans>
                </li>
              </ol>
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>{t("faq.accountFAQ.6.0")}</summary>
            <p>
              <Trans i18nKey="faq.accountFAQ.6.1" components={[<FaqLink href="mailto:support@fightpandemics.com" target="_blank"/>]}></Trans>
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>{t("faq.accountFAQ.7.0")}</summary>
            <p>
              {t("faq.accountFAQ.7.1")}
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>{t("faq.accountFAQ.8.0")}</summary>
            <p>
              <Trans i18nKey="faq.accountFAQ.8.1" components={[<FaqLink href="mailto:support@fightpandemics.com" target="_blank"/>]}></Trans>
            </p>
          </details>
        </AnswerContainer>
          <h2 className="text-primary display-5">{t("faq.contects")}</h2>
        <AnswerContainer>
          <details>
            <summary>{t("faq.contectsFAQ.0.0")}</summary>
            <p>
              <Trans i18nKey="faq.contectsFAQ.0.1" components={[<FaqLink href="mailto:partnerships@fightpandemics.com" target="_blank"/>]}></Trans>
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>{t("faq.contectsFAQ.1.0")}</summary>
            <p>
              <Trans i18nKey="faq.contectsFAQ.1.1" components={[<FaqLink href="mailto:pr@fightpandemics.com" target="_blank"/>]}></Trans>
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>{t("faq.contectsFAQ.2.0")}</summary>
            <p>
              <Trans i18nKey="faq.contectsFAQ.2.1" components={[<FaqLink href="mailto:support@fightpandemics.com" target="_blank"/>]}></Trans>
            </p>
          </details>
        </AnswerContainer>
        <AnswerContainer>
          <details>
            <summary>
              {t("faq.contectsFAQ.3.0")}
            </summary>
            <p>
              <Trans i18nKey="faq.contectsFAQ.3.1" components={[<FaqLink href="mailto:contact@fightpandemics.com" target="_blank"/>]}></Trans>
            </p>
          </details>
        </AnswerContainer>
      </QuestionsContainer>
    </FaqContainer>
  );
};

export default Faq;
